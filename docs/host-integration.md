+++
title = "Host integration"
description = "Connect portable repository instructions to your host's actual capabilities."
section = "start"
order = 2
permalink = "/host-integration/index.html"
+++

## Load the instructions

SuperJunior supplies instruction files and supporting references. A host may register them as skills, expose commands, or let an agent read them explicitly. The repository does not provide a host runtime or command registrar.

A portable starting request is:

```text
Read skills/workflow-self-review/SKILL.md and its applicable principles.
Review the current diff against the original acceptance conditions.
Return findings for the actual working-tree contents.
```

Paths in skill definitions are relative to the skill file or its references. Keep that context when loading a file; resolve linked principles and role definitions from their declared locations.

## Install the skills

Code agents discover skills only in their own directories; they do not read this repository's `skills/` folder in place. Copy every skill directory into the target project's discovery directory, side by side, so relative links such as `../workflow-align-scope/SKILL.md` keep resolving. Copy rather than symlink: Codex has had reported problems loading symlinked skill trees.

| Tool | Version checked | Project directory | Personal directory |
| :--- | :--- | :--- | :--- |
| Claude Code | 2.1.300 | `.claude/skills/` | `~/.claude/skills/` |
| Codex CLI | 0.162.1 | `.agents/skills/` | `~/.agents/skills/` |
| Antigravity CLI (`agy`) | 1.3.6 | `.agents/skills/` | `~/.gemini/antigravity-cli/skills/` |

With the project directories populated, each listed version discovered all SuperJunior skills. The personal directories follow each tool's documentation and were not tested. None of these tools loads an `agent.toml` role as a subagent; the owning agent passes a role's instructions to the worker it starts.

## Handle the metadata

Every skill definition uses YAML front matter limited to the Agent Skills fields `name`, `description`, `license`, and `metadata`; the two modes set `metadata.mode` to "true". The specialized agent role files are plain TOML with `name`, `description`, `readonly`, and `instructions`.

The documentation site's TOML parser handles documentation pages only. If your host accepts a different skill format, use its supported registration or adapter mechanism. Reading a definition as instructions is a viable entry point when native discovery is unavailable.

## Assign responsibilities to the host

- **Discovery**: Make the intended skill and its references accessible.
- **Persistent mode**: Retain activation and honor explicit opt-out across engineering follow-ups.
- **Tools and permissions**: Enforce readable paths, writable paths, external actions, and available capabilities.
- **Delegation**: Load role instructions, select configured models, and enforce concurrency and budget.
- **Execution**: Run authorized actions and return real observations to the owning agent.

A role's `readonly` value is a declared policy. Actual enforcement comes from host permissions and the parent assignment. A writable role still needs an explicit write boundary.

## Integrate gradually

Start with direct execution of one workflow. Check that the host can load referenced principles and produce an artifact-specific result. Then use [junior-mode](/skills/junior-mode/) to coordinate a complete route.

Enable [subagents](/subagents/) when delegation is authorized and useful. Workers return bounded results; the owner integrates and reassesses evidence. Further delegation requires an explicit grant.

Mode activation does not create background execution, new tool access, or permission to publish. Use the task's actual authority and delivery form.
