+++
title = "Choose an agent role"
navTitle = "Agent roles"
description = "Run one engineering step directly, or delegate a bounded assignment when your host supports it."
section = "roles"
order = 0
permalink = "/subagents/index.html"
+++

Use an agent role when you already know which step you need. Use [junior mode](/skills/junior-mode/) when you want the implementation workflow coordinated for you.

## Match the role to the task

| Task | Role | Useful result |
| :--- | :--- | :--- |
| Understand the change before editing | [Scope aligner](/skills/agent-scope-aligner/) | Done Criteria, affected code, risks, and a plan |
| Implement an agreed behavior test-first | [TDD implementer](/skills/agent-tdd-implementer/) | Changes, Red/Green evidence, and remaining issues |
| Explain and fix a failure | [Scientific debugger](/skills/agent-scientific-debugger/) | Diagnosis, reproduction, fix, and verification |
| Assess an existing change | [Code reviewer](/skills/agent-code-reviewer/) | Verdict and actionable findings |
| Prepare messages or create local commits | [Git committer](/skills/agent-git-committer/) | Message drafts or confirmed commits with evidence |

For explanations of existing code or architecture choices, use [senior mode](/skills/senior-mode/) and its analysis skills.

## Give a bounded assignment

Provide the relevant behavior or question, the files or diff to inspect, constraints, and the result you expect. State whether the role should make changes.

```text
Use agent-code-reviewer on the current diff.
The requirement is that an empty tag selection returns every item.
Check the callers and tests affected by that behavior.
Return findings without modifying files.
```

Scope alignment and code review are read-only roles. Implementation, debugging, and committing can change the repository within the assignment and host permissions.

## Read a role's result in context

Roles use different fields because they answer different questions. `IDENTIFIED` is a diagnosis; `APPROVE` is a review verdict; `CREATED` reports a commit result. Look at supporting evidence and limitations before deciding the next action.

[Junior mode's handoff rules](/skills/junior-mode/#check-the-handoff) explain how these results contribute to a complete code-change task. A directly invoked role can finish its assignment while the wider project still has work to do.

## Delegate when it helps

A separate subagent is optional. It needs host support and authorization, plus enough context to do the assigned work independently. Give it a clear boundary and avoid overlapping edits.

The owner remains responsible for checking evidence, resolving conflicts, and integrating the result. See [Host integration](/host-integration/#direct-work-and-delegation) for what the host controls.
