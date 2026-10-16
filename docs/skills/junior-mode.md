+++
title = "Junior mode"
description = "Coordinate the complete engineering lifecycle from scope alignment to atomic commit."
permalink = "/skills/junior-mode/index.html"
section = "mode"
order = 0
source = "skills/junior-mode/SKILL.md"
+++

Junior mode coordinates a disciplined, verifiable engineering lifecycle. It ensures that every task advances systematically through alignment, test-driven development, empirical debugging, design self-review, and atomic delivery.

## Activate and scope the mode

Use junior-mode when explicitly invoked or retained as active by the host. It stays active across engineering follow-ups until the user opts out. Completing a task leaves the mode available; it does not start another task.

A status question or correction updates the active task. An explicit new task starts a new route. Honor cancellation, pause, and opt-out while preserving completed work and evidence.

The definition is a portable contract. [The host](/host-integration/) provides discovery, persistent activation, tools, worker execution, and permissions.

## Choose the route

Junior mode checks four routes in order and takes the first that matches:

1. **Design decision pending**: the request needs an unmade design or technology choice, such as a storage engine, framework, component boundary, or public API shape. Junior mode does not choose; it returns `needs-decision`, hands the question to [senior mode](/skills/senior-mode/) with the options and tradeoffs, and resumes once the decision is confirmed.
2. **Defect route**: the request reports an exception, a failing test, or an intermittent failure. After a one-line problem statement and Done Criteria, work starts at scientific debugging, then continues to self-review and commit. An intermittent failure first isolates its nondeterministic input.
3. **Light route**: the change cannot alter runtime behavior, such as documentation, comments, formatting, or configuration values that no code path branches on. It gets a brief scope alignment, the change, the narrowest observable check for the touched files, and an atomic commit.
4. **Full route**: every other change.

Questions about how code works or why it was written that way also belong to senior mode.

## Keep the task record

Junior mode records the active task in `.superjunior/task.md`: route (full, light, or defect), current phase, Done Criteria, candidate files, evidence per phase, and open decisions. The record is updated at every phase transition and never committed. A paused task keeps it; a delivered or cancelled task deletes it. To resume, the owner re-runs evidence whose files, dependencies, inputs, or environment changed and continues from the earliest phase with missing or invalid evidence.

## The engineering route

- Phase 1: [Align scope](/skills/workflow-align-scope/) to define the problem, Done criteria, and mapped blast radius.
- Phase 2: [Context TDD](/skills/workflow-context-tdd/) for test-driven development across Happy Path, Boundary Conditions (`[]`), and Error Scenarios.
- Phase 3A: [Scientific debug](/skills/workflow-scientific-debug/) when defects occur to observe logs, formulate hypotheses, build minimal repro tests, and fix root causes.
- Phase 3B: [Self review](/skills/workflow-self-review/) to audit diffs against the Four-Layer Software Design Principles.
- Phase 3C: [Atomic commit](/skills/workflow-atomic-commit/) for single-responsibility staged diffs and informative why-commit messages.

## Interpret the result

- **pass**: Advance to subsequent phase on agreed route
- **needs-change**: Route confirmed defect or smell to implementation or debugging
- **unverified**: Stay at affected phase; obtain reliable observations or report gap
- **needs-decision**: Halt dependent execution; escalate structured question to user

## Delegate through workflows

Work directly by default. Delegate when authorized and useful using the [specialized agent roles](/subagents/) and host-configured models:
- Scope exploration to [agent-scope-aligner](/skills/agent-scope-aligner/)
- TDD implementation to [agent-tdd-implementer](/skills/agent-tdd-implementer/)
- Defect diagnosis to [agent-scientific-debugger](/skills/agent-scientific-debugger/)
- Objective code audit to [agent-code-reviewer](/skills/agent-code-reviewer/)
- Atomic commit preparation to [agent-git-committer](/skills/agent-git-committer/)

## Return honestly

Return the result, completion status, current phase, decisive evidence, limitations, and next action.

Use `pass` when the agreed route and delivery are complete. A review-only or verification-only request returns its actual phase outcome even when the report completes the task.
