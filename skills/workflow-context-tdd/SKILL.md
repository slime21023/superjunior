---
name: workflow-context-tdd
description: "Use when implementing a feature or fixing a reported defect test-first. Understand the context, inventory test specs across Happy Path, Boundary, and Error quadrants, run Red-Green-Refactor against public interfaces with mocks only at external boundaries, and fall back to a narrow reproduction check when an in-suite test is impractical. Phase 2 of junior-mode."
license: MIT
---

# Workflow: Context-First Test-Driven Development

Context-First TDD prioritizes deep comprehension of existing contracts, data models, and architectural patterns before authoring code. It treats tests as living specifications of public behavior and guards against brittle, mock-heavy rituals.

---

## Testing Constraints & Boundaries

<testing-constraints>
  Assert against observable public inputs and outputs. Tests that inspect private variables, private methods, or internal object state break whenever the implementation changes, so do not write them. Mock only at external system boundaries — network HTTP, database I/O, external message brokers, hardware timers — and never mock domain entities, internal helpers, or local data structures. Never loosen existing thresholds, comment out failing assertions, or delete tests merely to obtain a green run. Keep fixtures scoped and local, and never mutate shared global fixtures; a test should still pass after the implementation is refactored.
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
  1. **Author Failing Test (Red)**: For a reported defect, first state the expected behavior, the current faulty behavior, and the smallest input that reproduces it; the failing test captures exactly that defect. Write the narrowest assertion capturing the desired contract. Run the test and verify that it fails strictly for the expected missing feature or defect, not due to syntax or environmental errors.
  2. **Minimal Implementation (Green)**: Write the simplest production code that satisfies the test. Do not prematurely optimize or add speculative capabilities. Confirm the test transitions cleanly from Red to Green.
  3. **Safe Refactoring (Refactor)**: Under green test protection, polish the implementation: apply SLAP, precise naming with units, and early guard clauses. Re-run tests to confirm zero regression.
</procedure>

---

## Circuit Breakers

<circuit-breaker>
  If your implementation fails the test twice or breaks adjacent module tests, stop editing and re-evaluate whether your mental model or test assumption is flawed. If a test fails intermittently without code changes, stop and isolate the non-deterministic variable before proceeding.
</circuit-breaker>

---

## Impractical Test Fallback

<test-fallback>
  Skip the in-suite test when it would need more than two mocked third-party services or deep internal abstractions, live network access, production credentials, non-reproducible state, or setup that costs more than the fix itself. Use the narrowest reliable check instead, in this order of preference:

  1. A standalone reproduction script (e.g., `node repro.js` or `python repro.py`).
  2. An exact CLI command whose exit code or output shows the defect.
  3. A focused log or snapshot observation.

  A reliable, explicit check is better evidence than a brittle mock-heavy test. Record why the in-suite test was skipped.
</test-fallback>

---

## Output Contract

<output-contract>
  Report the work in this structure:

  1. **Contract**: The expected behavior, or for a defect the gap between expected and actual behavior, in 1-2 sentences.
  2. **Red Evidence**: The exact test or fallback command and its failing output before the change.
  3. **Change**: The root cause for a defect, and the minimal production change made.
  4. **Green Evidence**: The passing output for the new check and for adjacent module tests.
  5. **Fallback Note**: When the in-suite test was skipped, the reason and the check used instead.
</output-contract>

---
---

## Return Outcomes

<workflow-outcomes>
  - **pass**: All test specs (Happy Path, Boundary, Error) are implemented and passing with zero regression, or a fallback check verifies the change. Advance to workflow-self-review.
  - **needs-change**: Implementation or test design failed verification and requires conceptual re-alignment.
  - **unverified**: Neither an in-suite test nor a fallback check can reliably verify the change, or the test environment is broken or non-deterministic.
</workflow-outcomes>
