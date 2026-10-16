+++
title = "Context TDD"
description = "Phase 2 TDD cycle: context comprehension, 3-quadrant specs, and Red-Green-Refactor."
permalink = "/skills/workflow-context-tdd/index.html"
section = "workflows"
order = 2
source = "skills/workflow-context-tdd/SKILL.md"
+++

## When to use it

Execute during implementation to turn requirements into executable regression suites before altering production code.

## Apply it

1. Inspect existing architecture, models, and idioms before writing tests.
2. Inventory test specifications across three quadrants: Happy Path, Boundary Conditions (empty collections `[]`, zero values, idempotency), and Error Scenarios.
3. Execute the Red-Green-Refactor cycle:
   - Red: Confirm the test fails strictly due to the targeted missing behavior.
   - Green: Implement the minimal production code to pass.
   - Refactor: Polish design and naming under green test protection.
4. Test public interfaces only; mock strictly at external system boundaries (DB, network).

## Circuit breakers

Halt after 2 consecutive failed fix attempts. Re-evaluate mental models rather than looping on trial-and-error edits.
