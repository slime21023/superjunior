+++
title = "Install and run with your coding agent"
description = "Skill locations, host responsibilities, and checks to make when discovery or execution differs."
section = "start"
order = 2
permalink = "/host-integration/index.html"
+++

SuperJunior's files contain instructions. The coding agent that loads them controls tools, filesystem access, command execution, and permission prompts.

<h2 id="install-the-skills">Install the skills</h2>

Copy the contents of this repository's `skills/` into one of the locations below. Copy the skill directories themselves, so the result is a set of sibling folders such as `junior-mode/SKILL.md` and `agent-code-reviewer/SKILL.md`.

| Host | Project directory | Personal directory |
| :--- | :--- | :--- |
| Claude Code | `.claude/skills/` | `~/.claude/skills/` |
| Codex CLI | `.agents/skills/` | `~/.agents/skills/` |
| Antigravity CLI (`agy`) | `.agents/skills/` | `~/.gemini/antigravity-cli/skills/` |

Use ordinary directory copies. The repository's discovery setup uses copies, and the relative links between skills depend on keeping the sibling layout.

The previous handbook recorded successful project-directory discovery with Claude Code 2.1.300, Codex CLI 0.162.1, and agy 1.3.6. These are recorded test versions, not minimum versions or a guarantee about newer releases. Personal directories were documented but not tested in that baseline. Verify discovery in your installed host before relying on it.

## Check discovery

Start a session in the target project and ask the host to list the SuperJunior skills it sees. Compare the list with the folders you copied.

Naming a skill in a request makes your intent explicit:

```text
Use agent-scope-aligner to identify the files and tests affected by adding CSV export.
Do not change files.
```

Automatic selection depends on the host and the other skills it has installed. A role's name does not create a separate agent process.

<h2 id="if-a-skill-is-not-found">If a skill is not found</h2>

Check that `SKILL.md` is directly inside the named skill folder, that all required sibling skills were copied, and that the session is using the intended project. Follow your host's refresh or new-session behavior after changing installed skills.

If discovery is unavailable, ask the agent to read the file explicitly. For a Claude Code project installation, for example:

```text
Read .claude/skills/junior-mode/SKILL.md and use it for this task.
```

Substitute the actual installed path for your host. Reading the file supplies instructions; it does not add tools the host lacks.

## What the host must supply

| Capability | What it affects |
| :--- | :--- |
| File and history access | Whether the agent can inspect source, callers, and recorded decisions |
| Command execution | Whether it can reproduce failures, run checks, and create authorized commits |
| Permissions | Which edits and external actions it may perform |
| Conversation persistence | Whether mode instructions remain available across follow-ups |
| Delegation | Whether a bounded assignment can run in a separate subagent |

If execution is unavailable, the agent must identify missing evidence. A static assessment cannot substitute for an executed check. If a new session has lost mode context, name the mode again and provide the relevant task record or handoff.

<h2 id="direct-work-and-delegation">Direct work and delegation</h2>

The normal path is to apply each role in the current session. When delegation is authorized and useful, the owner supplies the task, relevant context, read or write boundaries, and expected evidence. The owner then checks and integrates the result.

The skills do not start subagents automatically. Read-only wording describes a role's intended behavior; host permissions enforce access. See [Agent roles](/subagents/) for choosing a bounded assignment.

## Delivery and external actions

Say whether the task should end in local edits, message drafts, local commits, or an authorized remote action. Permission to use a mode does not itself authorize a push, publication, or unrelated changes.

The [first-task guide](/getting-started/) shows how to state delivery in a request. Contributors testing host behavior can use the [CLI evals](/maintenance/#run-the-optional-cli-evals).
