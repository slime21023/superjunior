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
  <constraint type="public-interfaces-only">
    Assert against observable public inputs and outputs. Never write tests that inspect private variables, private methods, or internal object state.
  </constraint>
  <constraint type="mock-boundary-discipline">
    Mock strictly at external system boundaries (network HTTP, database I/O, external message brokers, hardware timers). Never mock domain entities, internal helpers, or local data structures.
  </constraint>
  <constraint type="zero-assertion-weakening">
    Never loosen existing thresholds, comment out failing assertions, or delete tests merely to obtain a green run.
  </constraint>
</testing-constraints>

---

## 3-Quadrant Test Spec Inventory

<test-spec-matrix>
  <quadrant name="Happy Path">
    <purpose>Validate standard business flow and successful state transitions.</purpose>
    <scenarios>Valid payload returns 200, state transitions correctly, output matches business requirements.</scenarios>
  </quadrant>
  <quadrant name="Boundary Conditions">
    <purpose>Absorb extremes, empty sets, and limit states gracefully.</purpose>
    <scenarios>Empty collections [], zero values, maximum length limits, idempotent re-executions.</scenarios>
  </quadrant>
  <quadrant name="Error Scenarios">
    <purpose>Verify safe, predictable failure modes and error contracts.</purpose>
    <scenarios>Malformed input payloads, missing authorization tokens, timeout/network rejections.</scenarios>
  </quadrant>
</test-spec-matrix>

---

## 3-Stage Red-Green-Refactor Procedure

<procedure>
  <step id="1" name="Author Failing Test (Red)">
    Write the narrowest assertion capturing the desired contract. Run the test and verify that it fails strictly for the expected missing feature or defect, not due to syntax or environmental errors.
  </step>
  <step id="2" name="Minimal Implementation (Green)">
    Write the simplest production code that satisfies the test. Do not prematurely optimize or add speculative capabilities. Confirm the test transitions cleanly from Red to Green.
  </step>
  <step id="3" name="Safe Refactoring (Refactor)">
    Under green test protection, polish the implementation: apply SLAP, precise naming with units, and early guard clauses. Re-run tests to confirm zero regression.
  </step>
</procedure>

---

## Circuit Breakers

<circuit-breaker>
  <trigger condition="consecutive-failures">
    If your implementation fails the test twice or breaks adjacent module tests, STOP editing immediately!
    Re-evaluate whether your mental model or test assumption is flawed.
  </trigger>
  <trigger condition="flaky-tests">
    If a test fails intermittently without code changes, stop and isolate the non-deterministic variable before proceeding.
  </trigger>
</circuit-breaker>

---

## Return Outcomes

<workflow-outcomes>
  <outcome code="pass">All test specs (Happy Path, Boundary, Error) implemented and passing cleanly with zero regression. Advance to workflow-self-review.</outcome>
  <outcome code="needs-change">Implementation or test design failed verification and requires conceptual re-alignment.</outcome>
  <outcome code="unverified">Test runner or required test environment is broken, inaccessible, or non-deterministic.</outcome>
</workflow-outcomes>
