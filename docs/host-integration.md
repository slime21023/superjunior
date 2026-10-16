+++
title = "Host integration"
description = "What your code agent needs to provide for the skills to work, and how to adopt them step by step."
section = "start"
order = 2
permalink = "/host-integration/index.html"
+++

SuperJunior provides instructions. Your code agent, the host, runs them. The skills do not add tools, permissions, or background processes; they rely on what the host already offers.

## What the host provides

- **Discovery**: finds the skills and the files they link to, such as principles and agent roles.
- **Persistent mode**: keeps junior or senior mode active across follow-ups until you turn it off.
- **Permissions**: decides which files the agent may read and write, and which commands and external actions it may run.
- **Delegation**: starts subagents, if you allow them, and limits how many run and what they cost.
- **Execution**: runs commands and returns real output to the agent.

When a host lacks one of these, the skills still work with less help. Without discovery, ask the agent to read a skill file directly. Without persistent mode, mention the mode again in follow-up requests.

## Install the skills

Copy every skill directory into the tool's skill directory, side by side, so links between skills keep working. Copy instead of symlinking; Codex has had reported problems loading symlinked skills.

| Tool | Version checked | Project directory | Personal directory |
| :--- | :--- | :--- | :--- |
| Claude Code | 2.1.300 | `.claude/skills/` | `~/.claude/skills/` |
| Codex CLI | 0.162.1 | `.agents/skills/` | `~/.agents/skills/` |
| Antigravity CLI (`agy`) | 1.3.6 | `.agents/skills/` | `~/.gemini/antigravity-cli/skills/` |

With the project directories filled, each listed version discovered every skill. The personal directories come from each tool's documentation and were not tested.

## How delegation works

By default, the agent does every phase itself. When your host allows subagents and a focused, isolated assignment helps, the agent can hand one phase to an [agent role](/subagents/): scope alignment, test-first implementation, debugging, review, or committing. The agent gives the subagent the role's instructions and an explicit read or write boundary, then checks the evidence that comes back before moving on.

None of the tested tools starts these roles automatically. The agent passes the role's instructions to the subagent it starts. A role marked read-only states an intent; the host's permissions are what actually enforce it.

## Adopt gradually

Start with one workflow, such as [self-review](/skills/workflow-self-review/) on an existing diff, and check that the agent finds the linked principles and returns findings about your actual code. Next, run a small change through [junior mode](/skills/junior-mode/). Turn on delegation to [agent roles](/subagents/) only after the single-session route works.

Activating a mode never grants permission to push or publish. Say how you want work delivered: local changes, local commits, or a pull request you authorize.
