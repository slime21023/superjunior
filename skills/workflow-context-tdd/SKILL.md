---
name: workflow-context-tdd
description: Phase 2 daily engineering workflow. Context-First Test-Driven Development (TDD). Understand context, inventory test specs across Happy Path / Boundary / Error, execute Red-Green-Refactor, test public interfaces, and mock strictly at external boundaries.
outcomes: ["pass", "needs-change", "unverified"]
license: MIT
---

# Workflow: Context-First Test-Driven Development

Context-First TDD prioritizes deep comprehension of existing contracts, data models, and architectural patterns before authoring code. It treats tests as living specifications of public behavior and guards against brittle, mock-heavy rituals.

---

## Testing Constraints & Boundaries

<testing-constraints>
  Assert against observable public inputs and outputs. Tests that inspect private variables, private methods, or internal object state break whenever the implementation changes, so do not write them. Mock only at external system boundaries — network HTTP, database I/O, external message brokers, hardware timers — and never mock domain entities, internal helpers, or local data structures. Never loosen existing thresholds, comment out failing assertions, or delete tests merely to obtain a green run.
</testing-constraints>

---

## 3-Quadrant Test Spec Inventory

<test-spec-matrix>
  | Quadrant | Purpose | Typical scenarios |
  | :--- | :--- | :--- |
  | Happy Path | Validate standard business flow and successful state transitions. | Valid payload returns 200, state transitions correctly, output matches business requirements. |
  | Boundary Conditions | Absorb extremes, empty sets, and limit states gracefully. | Empty collections `[]`, zero values, maximum length limits, idempotent re-executions. |
  | Error Scenarios | Verify safe, predictable failure modes and error contracts. | Malformed input payloads, missing authorization tokens, timeout/network rejections. |
</test-spec-matrix>

---

## 3-Stage Red-Green-Refactor Procedure

<procedure>
  1. **Author Failing Test (Red)**: Write the narrowest assertion capturing the desired contract. Run the test and verify that it fails strictly for the expected missing feature or defect, not due to syntax or environmental errors.
  2. **Minimal Implementation (Green)**: Write the simplest production code that satisfies the test. Do not prematurely optimize or add speculative capabilities. Confirm the test transitions cleanly from Red to Green.
  3. **Safe Refactoring (Refactor)**: Under green test protection, polish the implementation: apply SLAP, precise naming with units, and early guard clauses. Re-run tests to confirm zero regression.
</procedure>

---

## Circuit Breakers

<circuit-breaker>
  If your implementation fails the test twice or breaks adjacent module tests, stop editing and re-evaluate whether your mental model or test assumption is flawed. If a test fails intermittently without code changes, stop and isolate the non-deterministic variable before proceeding.
</circuit-breaker>

---

## Return Outcomes

<workflow-outcomes>
  - **pass**: All test specs (Happy Path, Boundary, Error) implemented and passing cleanly with zero regression. Advance to workflow-self-review.
  - **needs-change**: Implementation or test design failed verification and requires conceptual re-alignment.
  - **unverified**: Test runner or required test environment is broken, inaccessible, or non-deterministic.
</workflow-outcomes>
