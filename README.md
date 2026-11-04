# SuperJunior

SuperJunior is a collection of skills for coding agents. Use it to carry a code change from scope to verification, or to understand a system before deciding what to build.

Choose the result you need:

| Your task | Start with |
| :--- | :--- |
| Add a feature, fix a defect, or refactor | `junior-mode` |
| Explain code, investigate a design decision, or compare architectures | `senior-mode` |
| Scope, implement, debug, review, or commit one bounded piece of work | The matching [agent role](https://slime21023.github.io/superjunior/subagents/) |

Junior mode coordinates implementation and checks the evidence from each phase. Senior mode develops explanations and decisions without changing product code. Individual roles also work directly in the current session; using them does not automatically start subagents.

## Install and try it

Copy the directories inside `skills/` into the target project's skill directory, keeping them side by side. The project's documented locations are `.claude/skills/` for Claude Code and `.agents/skills/` for Codex CLI and Antigravity CLI. Use ordinary directory copies so the links between skills remain intact.

See [Host integration](https://slime21023.github.io/superjunior/host-integration/) for the recorded discovery baseline, personal directories, and troubleshooting.

In your coding agent, try:

```text
Use junior-mode to fix the saved filter.
With no selected tags, it must show all items.
Keep the behavior for selected tags unchanged.
Reproduce the failure and verify the fix.
Leave the changes in my working tree without committing.
```

State the delivery you want: working-tree changes, local commits, or another explicitly requested action. Installing a skill does not grant tools or permissions.

## Read the result

Each role reports evidence in a form suited to its task. A debugger's `IDENTIFIED` describes a diagnosis; a reviewer's `APPROVE` describes a review. Junior mode checks those results before declaring the requested work complete.

Start with the [handbook](https://slime21023.github.io/superjunior/), follow the [first-task walkthrough](https://slime21023.github.io/superjunior/getting-started/), or adapt an [example request](https://slime21023.github.io/superjunior/examples/).

## Contribute

The execution instructions live in `skills/<name>/SKILL.md`; their user-facing explanations live in `docs/`. Keep both accurate when behavior changes.

Run `npm ci` once, then `npm run check` to build the handbook and test its links, skill definitions, eval graders, and workspace checks. These local tests do not call an agent. [Maintenance](https://slime21023.github.io/superjunior/maintenance/) covers local preview, CLI evals, and publishing.

## License

MIT. See [LICENSE](LICENSE).
