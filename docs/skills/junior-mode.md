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

## The engineering route

```xml
<lifecycle-route>
  <phase id="1" name="Scope alignment" workflow="/skills/workflow-align-scope/">Problem statement, Done criteria, and mapped blast radius</phase>
  <phase id="2" name="Context TDD" workflow="/skills/workflow-context-tdd/">Red-Green-Refactor with Happy Path, Boundary, and Error specs</phase>
  <phase id="3A" name="Defect diagnosis" workflow="/skills/workflow-scientific-debug/">Falsifiable hypotheses, minimal repro test, and root-cause fix</phase>
  <phase id="3B" name="Design audit" workflow="/skills/workflow-self-review/">Four-layer design inspection against quality gates</phase>
  <phase id="3C" name="Delivery" workflow="/skills/workflow-atomic-commit/">Single-responsibility staged diff and informative why-commit</phase>
</lifecycle-route>
```

- Phase 1: [Align scope](/skills/workflow-align-scope/) to define the problem, Done criteria, and mapped blast radius.
- Phase 2: [Context TDD](/skills/workflow-context-tdd/) for test-driven development across Happy Path, Boundary Conditions (`[]`), and Error Scenarios.
- Phase 3A: [Scientific debug](/skills/workflow-scientific-debug/) when defects occur to observe logs, formulate hypotheses, build minimal repro tests, and fix root causes.
- Phase 3B: [Self review](/skills/workflow-self-review/) to audit diffs against the Four-Layer Software Design Principles.
- Phase 3C: [Atomic commit](/skills/workflow-atomic-commit/) for single-responsibility staged diffs and informative why-commit messages.

## Interpret the result

```xml
<workflow-transitions>
  <transition outcome="pass">Advance to subsequent phase on agreed route</transition>
  <transition outcome="needs-change">Route confirmed defect or smell to implementation or debugging</transition>
  <transition outcome="unverified">Stay at affected phase; obtain reliable observations or report gap</transition>
  <transition outcome="needs-decision">Halt dependent execution; escalate structured question to user</transition>
</workflow-transitions>
```

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
