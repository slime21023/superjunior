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

## Defects and fallbacks

For a reported defect, first state the expected behavior, the current faulty behavior, and the smallest input that reproduces it, then write the failing test for exactly that defect. When an in-suite test would need heavy third-party mocks, live network or credentials, non-reproducible state, or setup that costs more than the fix, use the narrowest reliable check instead: a standalone reproduction script, an exact CLI command, or a focused log or snapshot observation.

## Return the proof

Report the contract, the red evidence, the change and its root cause, the green evidence for the new check and adjacent tests, and, when the in-suite test was skipped, the reason and the check used instead.
