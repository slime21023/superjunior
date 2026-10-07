---
name: tdd
description: Use when explicitly requested (TDD, regression test, red-green fix), OR when reproducing a bug has a fast, low-cost local test target. Skip when testing requires expensive setup, heavy external mocks, slow E2E suites, or vague reproduction paths.
disable-model-invocation: true
license: MIT
---

# TDD Bug Fix

Turn the reported defect into an executable failure before altering production code. The objective is a sharp, low-maintenance regression check that transitions strictly from failing (red) to passing (green) via minimal code changes.

Never write a test merely to fulfill ritual. If an automated test cannot be added safely and cheaply, trigger the escape hatch immediately.

## Workflow

1. **Understand defect & contract (Cognitive Step):**
   - **Contract boundary:** Define explicit expected behavior vs. current faulty behavior.
   - **Affected path:** Trace the execution path and locate where the contract breaks.
   - **Minimal reproduction:** Identify the smallest observable input or state that reliably produces the fault.
   - *Do not touch files or run commands in this step—establish the mental model first.*

2. **Verify harness & choose target:**
   - Confirm local test runner executes cleanly on the affected module.
   - Select the closest existing test file or suite matching the code path.
   - If local setup is missing, broken, or disproportionately expensive, jump to **Impractical Test Fallback**.

3. **Author failing test (Red):**
   - Write the narrowest assertion capturing the contract breakdown.
   - Assert against expected external interface behavior, never internal implementation details.

4. **Confirm failure mode (Red Validation):**
   - Execute the new test.
   - **Gate:** Verify that it fails *exclusively* due to the expected defect, not syntax errors, missing fixtures, or unrelated environmental issues. If failure reason is unrelated, correct the test before proceeding.

5. **Apply minimal fix (Green):**
   - Modify production code with the smallest change necessary to satisfy the contract.
   - Avoid opportunistic refactoring, style fixes, or tangential cleanups.

6. **Validate fix & blast radius (Green + No Regressions):**
   - Re-run the new regression test to confirm it turns green.
   - **Blast Radius Check:** Run existing sibling tests in the same module/directory to ensure nearby contracts remain intact.

## Circuit Breakers (Loop Prevention)

- **Max 2 Fix Attempts:** If the fix fails the regression test twice, or fixes the bug but breaks sibling tests, stop editing. Re-evaluate whether the test assumption or the implementation mental model is incorrect.
- **Flaky Behavior:** If the test outcome fluctuates without code changes, stop. Convert the check into a deterministic signal before proceeding.

## Impractical Test Fallback

Skip writing an in-suite automated test if any of the following apply:
- Requires mocking more than 2 third-party services or deep internal abstractions.
- Depends on live network, production credentials, or non-reproducible state.
- Test infrastructure setup cost exceeds the complexity of the fix itself.

**Fallback Hierarchy (choose the narrowest):**
1. Standalone reproduction script (e.g., `node repro.js` or `python repro.py`).
2. Exact CLI command reproducing exit codes or stderr output.
3. Focused log/snapshot verification.

*Rule: An explicit manual verification command is strictly superior to a brittle mock-heavy unit test.*

## Guardrails

- **Zero assertion weakening:** Never loosen existing thresholds or delete failing assertions unless the business contract itself has changed.
- **Implementation independence:** The test must still pass if the internal implementation is refactored tomorrow.
- **Fixture containment:** Do not mutate shared global fixtures; use scoped, local data setups.

## Final Response

Deliver proof of work using the following structure:

1. **Defect & Contract:** 1–2 sentences summarizing the contract breakdown identified in Step 1.
2. **Red Evidence:** The exact test command executed and the failing assertion output before the fix.
3. **Root Cause & Minimal Fix:** Explanation of the defect and the concise production change made.
4. **Green Evidence:** The test command output showing green for the new test *and* confirmation that adjacent module tests passed.
5. **Fallback Note (if applicable):** If in-suite test was skipped, state the rationale and provide the exact reproduction check used instead.