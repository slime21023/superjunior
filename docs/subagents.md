+++
title = "Agent roles"
navTitle = "The five agent roles"
description = "Five worker roles for handing one phase of junior mode to a subagent with a clear boundary."
section = "roles"
order = 0
permalink = "/subagents/index.html"
+++

Agent roles are for one situation only: you, or the agent you are working with, want to hand a single phase of the work to a subagent. Work in the current session never uses a role. It follows the matching workflow directly, and that is the default. Delegate when an isolated assignment helps, for example when scope investigation would flood the main conversation with context, or when you want a review from a worker that did not write the code.

Each role is defined in an `agent.toml` file next to its skill. Claude Code, Codex CLI, and Antigravity CLI do not load these files as subagents on their own, so the delegating agent passes the role's definition to the worker together with the assignment. The host still decides what the worker is actually allowed to do.

## The five roles

| Role | Read-only | Matching workflow | Returns |
| :--- | :--- | :--- | :--- |
| [Scope aligner](/skills/agent-scope-aligner/) | Yes | [Align scope](/skills/workflow-align-scope/) | Problem statement, Done Criteria, blast radius, ordered plan |
| [TDD implementer](/skills/agent-tdd-implementer/) | No | [Context-first TDD](/skills/workflow-context-tdd/) | Test specs, red and green evidence, changed files |
| [Scientific debugger](/skills/agent-scientific-debugger/) | No | [Scientific debug](/skills/workflow-scientific-debug/) | Root cause, reproduction evidence, fix location, verification |
| [Code reviewer](/skills/agent-code-reviewer/) | Yes | [Self-review](/skills/workflow-self-review/) | `pass` or `needs-change` with located findings |
| [Git committer](/skills/agent-git-committer/) | No | [Atomic commit](/skills/workflow-atomic-commit/) | Staged files, commit message, test status |

A role that is not read-only may write only what its assignment allows. It is not a free hand in the workspace.

## Write a good assignment

A worker starts without your conversation, so the assignment has to carry everything it needs. Name the role and state the task in one or two sentences. Say which snapshot of the code it works on. Draw the read and write boundary explicitly: which files or modules it may read, which it may change, and which it must leave alone. Finish with the return conditions: what the report must contain, and when to stop and report instead of continuing.

```text
Role: agent-scope-aligner
Task: Investigate the token refresh flow and map the blast radius for adding a timeoutMs parameter.
Candidate: current working tree.
Read: the auth module, the HTTP client, and their tests.
Write: nothing. Do not delegate further.
Return: a problem statement, 2-3 Done Criteria, and the blast radius matrix.
Stop and report if the refresh contract has more than one reasonable reading.
```

## Integrate the result

The agent that delegated the work still owns it. It reads the returned report, re-checks the evidence instead of taking it on trust (re-running the tests a worker says pass, for example), and folds the result into the task. A worker that stops on its circuit breaker returns its question or its failed hypotheses; the owner decides the next step, asking the user when a decision is needed.
