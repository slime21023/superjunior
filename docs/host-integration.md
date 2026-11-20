+++
title = "Install and check skill discovery"
navTitle = "Host integration"
description = "Choose the project skill directory and check that your host can discover and run the skills."
section = "setup"
order = 2
permalink = "/host-integration/index.html"
+++

<h2 id="install-the-skills">Install the skills</h2>

Copy each full skill folder from `skills/` into your host's project skill directory. Keep `SKILL.md` and its `references/` together.

| Host | Project directory | Personal directory |
| --- | --- | --- |
| Claude Code | `.claude/skills/` | `~/.claude/skills/` |
| Codex CLI | `.agents/skills/` | `~/.agents/skills/` |
| Antigravity CLI (`agy`) | `.agents/skills/` | `~/.gemini/config/skills/` |

See the host guides for [Claude Code](https://code.claude.com/docs/en/skills), [Codex](https://developers.openai.com/codex/skills/), and [Antigravity](https://antigravity.google/docs/skills). Verify discovery in your installed host. For a shared team setup, use the project directory so teammates can use the same skill files.

<h2 id="if-a-skill-is-not-found">Check discovery</h2>

Start a fresh session in the target project. Ask the host what skills it sees, then try a request that names a current skill.

```text
Use explore to trace the notes-list filter and cite the files that determine its behavior.
Leave the project files unchanged.
```

If the skill is missing, check the project root and verify that the installed directory contains `explore/SKILL.md` and its references. Restart or refresh the session after changing the installation. When direct discovery is unavailable, ask the host to read the installed definition by its actual path.

## Match access to the task

An investigation needs access to relevant code and history. An implementation needs permission to edit its scope. Verification needs the required commands and services. Delivery needs authorization for the requested target and action. State whether you expect local edits, a commit, a push, a release, or a deployment.

Give the agent the current artifacts and evidence when starting a new session. If a command cannot run, retain the missing evidence and its reason in the handoff. Delegation depends on the host and the assignment. See [workflow combinations](/workflows/) for working within a single session or across handoffs.
