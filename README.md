# SuperJunior

SuperJunior is a set of skills for code agents such as Claude Code, Codex, and Antigravity. With them, the agent scopes a change before it writes code, proves the change with tests, reviews its own diff, and commits in small steps. Every result ends with a clear status: whether the work passed, needs changes, could not be verified, or is waiting on a decision from you.

## Pick a mode

| Use | When you want | You get back |
| :--- | :--- | :--- |
| `junior-mode` | Code changed: a feature, a bug fix, or a refactor | Tested changes, a self-review, and atomic commits |
| `senior-mode` | Understanding or design: how code works, why it was built that way, which architecture to choose | An explanation, a decision brief, or specifications under `_adr/`, plus a handoff brief for junior-mode |

Senior-mode never edits product code. When a design is ready to build, it hands a brief to junior-mode. You can also call a single workflow, design principle, or specialist skill directly when you need only one step.

## Install the skills

Copy every directory from `skills/` into your project's skill directory. Keep them side by side, because the skills link to each other. Copy the directories instead of symlinking them.

| Tool | Version checked | Project directory | Personal directory |
| :--- | :--- | :--- | :--- |
| Claude Code | 2.1.300 | `.claude/skills/` | `~/.claude/skills/` |
| Codex CLI | 0.162.1 | `.agents/skills/` | `~/.agents/skills/` |
| Antigravity CLI (`agy`) | 1.3.6 | `.agents/skills/` | `~/.gemini/antigravity-cli/skills/` |

The project directories were tested with each listed version. The personal directories come from each tool's documentation and were not tested. The tools do not start the agent roles as subagents on their own; see the handbook's host integration page.

## Make a first request

```text
Use junior-mode to fix this bug: a saved filter with no selected tags shows nothing.
It should show all items. Keep the current behavior when tags are selected.
Reproduce the failure first, then deliver tested local commits.
```

## Read the handbook

The handbook explains every skill and includes example requests. Preview it locally (Node.js 22 or newer):

```sh
npm ci
npm run dev
```

Open the address Eleventy prints, normally http://localhost:8080.

## Contributing

Skills live in `skills/<name>/SKILL.md`; agent roles also have an `agent.toml`. When you change a skill, update its page in `docs/skills/` too. Then run:

```sh
npm run check
```

This builds the site and checks the skill pages, internal links, copied sources, and skill definitions.

Optional behavior evals run against the real CLIs with `npm run eval:discovery`, `npm run eval:routing`, and `npm run eval:behavior`. They need Claude Code, Codex, and agy installed and signed in, they use your quota, and they write results to `evals/results/`. See the handbook's maintenance page for details.

## License

MIT. See [LICENSE](LICENSE).
