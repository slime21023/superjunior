// Runs one prompt through a code agent CLI inside a staged workspace where the
// repository's skills sit in each tool's native discovery directory.
import { spawn } from "node:child_process";
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = fileURLToPath(new URL("../../", import.meta.url));
const timeoutMs = 300_000;
const isWindows = process.platform === "win32";

const tools = {
  claude: {
    skillDir: ".claude/skills",
    run: (prompt, cwd, extraArgs) => run("claude", ["-p", prompt, "--output-format", "text", "--no-session-persistence", ...extraArgs], { cwd }),
  },
  codex: {
    skillDir: ".agents/skills",
    run: async (prompt, cwd, extraArgs) => {
      const outputDir = mkdtempSync(join(tmpdir(), "superjunior-codex-"));
      const lastMessage = join(outputDir, "last-message.txt");
      try {
        const args = ["exec", "--skip-git-repo-check", "--sandbox", "read-only", "--ephemeral", "--color", "never", "-o", lastMessage, ...extraArgs, "-"];
        // codex is installed as a .cmd shim on Windows, which spawn cannot start without a shell.
        await (isWindows ? run("cmd.exe", ["/d", "/s", "/c", "codex", ...args], { cwd, stdin: prompt }) : run("codex", args, { cwd, stdin: prompt }));
        return readFileSync(lastMessage, "utf8");
      } finally {
        rmSync(outputDir, { recursive: true, force: true });
      }
    },
  },
  agy: {
    skillDir: ".agents/skills",
    // At its default effort, agy keeps exploring the workspace past the timeout instead of answering.
    // Headless agy ends the turn with no output when a tool needs a permission prompt, so the disposable
    // workspace auto-approves tools while --sandbox keeps terminal restrictions and plan mode blocks edits.
    run: (prompt, cwd, extraArgs) => run("agy", ["-p", prompt, "--mode", "plan", "--effort", "medium", "--dangerously-skip-permissions", "--sandbox", "--print-timeout", "290s", ...extraArgs], { cwd }),
  },
};

function run(command, args, { cwd, stdin }) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd, windowsHide: true });
    let stdout = "";
    let stderr = "";
    const timer = setTimeout(() => {
      child.kill();
      reject(new Error(`${command} timed out after ${timeoutMs / 1000}s`));
    }, timeoutMs);
    child.stdout.on("data", (chunk) => { stdout += chunk; });
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("error", (error) => { clearTimeout(timer); reject(error); });
    child.on("close", (code) => {
      clearTimeout(timer);
      if (code === 0) resolve(stdout);
      else reject(new Error(`${command} exited with ${code}: ${stderr.trim() || stdout.trim()}`));
    });
    child.stdin.end(stdin ?? "");
  });
}

async function stageWorkspace(toolName) {
  const workspace = mkdtempSync(join(tmpdir(), `superjunior-eval-${toolName}-`));
  cpSync(join(repoRoot, "evals", "fixture"), workspace, { recursive: true });
  cpSync(join(repoRoot, "skills"), join(workspace, tools[toolName].skillDir), { recursive: true });
  writeFileSync(join(workspace, ".gitignore"), ".claude/\n.agents/\n");
  await run("git", ["init", "-q"], { cwd: workspace });
  await run("git", ["add", "."], { cwd: workspace });
  await run("git", ["-c", "user.name=eval", "-c", "user.email=eval@example.invalid", "commit", "-q", "-m", "Initial import"], { cwd: workspace });
  return workspace;
}

// Lists files the agent created, changed, or deleted; every prompt forbids edits.
async function changedFiles(workspace) {
  const status = await run("git", ["status", "--porcelain", "--untracked-files=all"], { cwd: workspace });
  return status.split("\n").map((line) => line.slice(3).trim()).filter(Boolean);
}

export default class AgentCliProvider {
  constructor(options) {
    this.toolName = options.config?.tool;
    if (!tools[this.toolName]) throw new Error(`Unknown tool: ${this.toolName}`);
    // Optional extra CLI flags, e.g. a model choice or Codex's `--disable plugins`.
    this.extraArgs = options.config?.args ?? [];
    this.providerId = options.id ?? `agent-cli:${this.toolName}`;
  }

  id() {
    return this.providerId;
  }

  async callApi(prompt) {
    let workspace;
    try {
      workspace = await stageWorkspace(this.toolName);
      const output = await tools[this.toolName].run(prompt, workspace, this.extraArgs);
      return { output: output.trim(), metadata: { changedFiles: await changedFiles(workspace) } };
    } catch (error) {
      return { error: error.message };
    } finally {
      if (workspace) rmSync(workspace, { recursive: true, force: true });
    }
  }
}
