---
name: plan-working
description: "Sequence work when a change needs coordinated steps, dependencies, or completion criteria."
license: MIT
---

# plan-working

## Overview

Turn an agreed outcome into work items that can be started, handed off, and verified.

- Order work by its actual prerequisites.
- Give each item an observable completion condition.
- Keep independent work moving when one item is blocked.

## Input

A goal, requirements, and the relevant current state.

Use confirmed requirements and acceptance criteria from the relevant `_spec/` document or from the user's instructions. Cite existing criterion IDs when available.

## Execution

Identify work across affected components, callers, tests, and artifacts. Order prerequisites before dependent work. Identify independent items that can run in parallel when useful.

For each item, name the work, its output, and the observable evidence that it is complete. Include verification against the relevant acceptance criteria and any requested delivery steps. If a design, decision, or missing piece of evidence blocks work, identify the affected items, what would unblock them, and what can proceed.

## Completion

When the task calls for a work plan to be saved, write it under `_artifacts/plan-working/` at the project root. Create the directory as needed and link to the file in the final reply.

Use this structure when the work needs explicit dependencies or handoffs:

```markdown
## Goal and basis
- **Goal** — State the result to deliver.
- **Basis** — Cite the relevant specification, acceptance criteria, user instructions, or current-state evidence.

## Work items
| ID | Work and output | Prerequisites | Completion evidence |
| --- | --- | --- | --- |
| W1 | [Work and expected output] | — | [Verifiable artifact, behavior, or check result] |
| W2 | [Work and expected output] | W1 | [Verifiable artifact, behavior, or check result] |

## Blockers and open decisions
- **Affects W2** — [Missing decision or evidence], [what would unblock W2], and [what can proceed].
```

Omit the blockers section when there are no blockers. For a small change, use an ordered list with an output and completion check for each step. The plan is ready to hand off when a reader can identify what to start, what each item depends on, and how to verify completion.

See [worked examples](references/examples.md) for a sequential fix and a feature with a pending decision.
