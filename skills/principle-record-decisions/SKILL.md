---
name: principle-record-decisions
description: Preserve consequential engineering decisions and their evidence during nontrivial work, tradeoffs, changed direction, review, or handoff. Use when another engineer would otherwise need to reconstruct why the current solution was chosen.
---

# Record Decisions

Leave enough context for the next person to understand the choice and its limits.

## Apply

- Record the problem, the chosen approach, and the constraint or evidence that made the choice matter.
- Capture alternatives only when they explain a consequential tradeoff. Ordinary implementation steps need no decision log.
- Distinguish observed results, inferences, and untested assumptions. Preserve important failed experiments and the reason for changing direction.
- Keep the current decision in an existing task record, PR, or appropriate project document. Update it when new evidence changes the conclusion.
- Link to inspected artifacts and reproducible checks instead of copying large raw outputs. Keep known limitations and unresolved decisions visible.
- Keep records local until sharing them is within the task's authorization.

## Evidence

A useful entry states what was chosen, why, the supporting evidence, and any condition that would cause reconsideration. A small task can use the work summary.

## Boundaries

Do not fabricate links, approvals, measurements, or test results. Recording a result does not establish which version it applies to; identify the checked artifact when that affects the conclusion.
