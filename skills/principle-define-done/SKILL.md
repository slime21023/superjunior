---
name: principle-define-done
description: Define observable acceptance criteria for a software task before implementation or when scope, assumptions, or the meaning of done are unclear. Keep development, review, verification, and delivery aligned with the requested outcome.
---

# Define Done

Express the requested outcome as something a reviewer or user can observe.

## Apply

- Extract the affected user or caller, the expected behavior, and the scope from the request and available project context.
- Define the smallest useful acceptance check: a concrete input or situation, its expected result, and how to observe it. For refactoring, name the behavior that must remain unchanged.
- Separate required conditions from optional improvements. Preserve explicit constraints and later user corrections.
- Inspect available facts before asking questions. State consequential assumptions; ask only when missing information materially changes correctness or the product decision. Continue independent work while waiting.
- Use the same acceptance conditions during implementation, review, verification, and delivery. If the goal changes, update the conditions and identify affected work and evidence.

## Evidence

Keep the outcome, scope, acceptance check, and unresolved consequential assumptions in the existing task record. A small, clear request can use a sentence and a direct check.

## Boundaries

Do not expand a discussion or investigation into implementation. Do not weaken acceptance conditions merely to make a failing result pass. A new product decision needs its rationale recorded.
