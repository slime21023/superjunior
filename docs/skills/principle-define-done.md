+++
title = "Define done"
description = "Make completion observable before choosing an implementation."
permalink = "/skills/principle-define-done/index.html"
section = "principles"
order = 1
source = "skills/principle-define-done/SKILL.md"
+++

## When to use it

Apply before implementation or when scope, assumptions, or the meaning of completion becomes unclear. The acceptance condition should describe a result that a caller, reviewer, or user can observe.

## Apply it

Identify the affected user or caller, the expected behavior, and the task boundary. Describe a concrete input or situation, its expected result, and the observation that establishes it. For a refactor, identify the behavior that must remain unchanged.

Separate required conditions from optional improvements. Inspect available facts before asking questions. Ask about missing information when it materially changes correctness or a product decision; continue independent work while waiting.

Use the same conditions during development, review, verification, and delivery. When the user changes the goal, update the conditions and reassess affected work and evidence.

## Example and record

“An empty tag selection shows all items” gives development a target and verification an observable case. “Improve filtering” still needs clarification.

Keep the outcome, scope, acceptance check, and consequential assumptions in the existing task record. A focused task can use one sentence and a direct check.

## Boundary

Discussion does not authorize implementation. Do not weaken an acceptance condition to make a failure pass.
