import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import test from "node:test";
import { captureWorkspace, checkWorkspace } from "./agent-cli.mjs";

function git(cwd, ...args) {
  const result = spawnSync("git", ["-c", "core.autocrlf=false", "-c", "core.hooksPath=/dev/null", "-c", "user.name=eval-test", "-c", "user.email=eval-test@example.invalid", ...args], { cwd, encoding: "utf8", windowsHide: true });
  assert.equal(result.status, 0, result.stderr || result.error?.message);
  return result.stdout;
}

function fixture(t) {
  const workspace = mkdtempSync(join(tmpdir(), "superjunior-eval-test-"));
  t.after(() => {
    const target = resolve(workspace);
    assert.equal(dirname(target), resolve(tmpdir()));
    assert.ok(basename(target).startsWith("superjunior-eval-test-"));
    rmSync(target, { recursive: true, force: true });
  });
  writeFileSync(join(workspace, "tracked.txt"), "before\n");
  writeFileSync(join(workspace, ".gitignore"), ".agents/\n");
  mkdirSync(join(workspace, ".agents/skills/sample"), { recursive: true });
  writeFileSync(join(workspace, ".agents/skills/sample/SKILL.md"), "original skill\n");
  git(workspace, "init", "-q");
  git(workspace, "add", ".");
  git(workspace, "commit", "-q", "-m", "baseline");
  return workspace;
}

test("reading files and Git history does not count as an edit", async (t) => {
  const workspace = fixture(t);
  const before = await captureWorkspace(workspace);
  readFileSync(join(workspace, "tracked.txt"));
  git(workspace, "status", "--porcelain");
  git(workspace, "log", "-1", "--oneline");
  assert.deepEqual(await checkWorkspace(workspace, before), { changedFiles: [], headChanged: false, indexChanged: false });
});

test("committed changes and empty commits are detected even with a clean worktree", async (t) => {
  const workspace = fixture(t);
  let before = await captureWorkspace(workspace);
  writeFileSync(join(workspace, "tracked.txt"), "after\n");
  git(workspace, "add", "tracked.txt");
  git(workspace, "commit", "-q", "-m", "changed");
  assert.equal(git(workspace, "status", "--porcelain"), "");
  assert.deepEqual(await checkWorkspace(workspace, before), { changedFiles: ["tracked.txt"], headChanged: true, indexChanged: true });
  before = await captureWorkspace(workspace);
  git(workspace, "commit", "--allow-empty", "-q", "-m", "empty");
  assert.deepEqual(await checkWorkspace(workspace, before), { changedFiles: [], headChanged: true, indexChanged: false });
});

test("ignored skill edits, additions, deletions, and empty directories are detected", async (t) => {
  const workspace = fixture(t);
  const before = await captureWorkspace(workspace);
  writeFileSync(join(workspace, ".agents/skills/sample/SKILL.md"), "changed skill\n");
  writeFileSync(join(workspace, "new file.txt"), "new\n");
  rmSync(join(workspace, "tracked.txt"));
  mkdirSync(join(workspace, "empty"));
  assert.deepEqual((await checkWorkspace(workspace, before)).changedFiles, [".agents/skills/sample/SKILL.md", "empty", "new file.txt", "tracked.txt"]);
});

test("an index-only change is detected when working-tree content is restored", async (t) => {
  const workspace = fixture(t);
  const before = await captureWorkspace(workspace);
  writeFileSync(join(workspace, "tracked.txt"), "staged\n");
  git(workspace, "add", "tracked.txt");
  writeFileSync(join(workspace, "tracked.txt"), "before\n");
  assert.deepEqual(await checkWorkspace(workspace, before), { changedFiles: [], headChanged: false, indexChanged: true });
});

test("directory links are captured without following them", async (t) => {
  const workspace = fixture(t);
  const before = await captureWorkspace(workspace);
  symlinkSync(workspace, join(workspace, "loop"), process.platform === "win32" ? "junction" : "dir");
  assert.deepEqual((await checkWorkspace(workspace, before)).changedFiles, ["loop"]);
});
