---
name: workflow-scientific-debug
description: "Use when an exception, failing test, or unexpected defect appears: parse the stack trace, form falsifiable hypotheses, write a minimal reproduction test, and fix the root cause where callers converge. Phase 3A of junior-mode."
license: MIT
---

# Workflow: Scientific Debugging

Scientific debugging replaces trial-and-error "shotgun debugging" with an empirical, hypothesis-driven protocol. It guarantees that bugs are reproduced deterministically, diagnosed at their root cause, and permanently sealed against regression.

---

## Operating Constraints

<constraints>
  Every fix follows a verified hypothesis and a reproduction test; do not make trial-and-error edits. Fix the root cause at the convergence point shared by all callers instead of scattering defensive patches across individual callers. Edits touch only the minimal reproduction test and the root-cause source files, so debugging never becomes a broad, unrequested refactoring.
</constraints>

---

## 5-Step Empirical Protocol

<debug-protocol>
  1. **Observe**: Parse raw error messages, stack traces, and relevant system logs. Identify the exact exception type, breached line number, and runtime context payloads. When the failure is intermittent, find the nondeterministic input first (time, randomness, ordering, concurrency, shared state, or network) and make it deterministic, because a hypothesis cannot be tested against a signal that changes on its own.
  2. **Hypothesize**: Formulate 1~2 concrete, falsifiable hypotheses explaining why the invariant broke. Never edit production code without a clear hypothesis.
  3. **Minimal Repro**: Author an isolated minimal reproduction test that reproduces the failure deterministically. Confirm that it fails exclusively with the targeted error.
  4. **Root-Cause Fix**: Trace where all callers converge and fix the broken invariant at the shared foundation. Absorb boundary conditions with empty collections or deep module defaults.
  5. **Verify Green**: Confirm that the reproduction test turns green and run all sibling module suites to verify zero regression.
</debug-protocol>

---

## Circuit Breaker: Structured Escalation

<circuit-breaker>
  If a bug resists diagnosis, or two successive fix attempts fail without yielding new diagnostic evidence, stop editing. Escalate to the user or team using the escalation schema below instead of trying further random changes.
</circuit-breaker>

<escalation-schema>
  Deliver structured inquiry conforming to this format:

  ### 🚨 Structured Debugging Inquiry
  - **Target Goal**: [What behavior we are trying to achieve]
  - **Expected vs. Actual**:
    - *Expected*: [Expected output / return value / state]
    - *Actual*: [Exact error / stack trace / actual output]
  - **Attempted Hypotheses & Evidence**:
    1. *Hypothesis 1*: [Hypothesis A] → *Result*: [Disproven because ...]
    2. *Hypothesis 2*: [Hypothesis B] → *Result*: [Disproven because ...]
  - **Concrete Question / Decision Needed**: [Specific architectural or behavioral clarification required]
</escalation-schema>

---

## Return Outcomes

<workflow-outcomes>
  - **pass**: Defect reproduced with minimal test, root cause resolved at caller convergence, and suite passing green.
  - **needs-change**: Reproduction check or fix attempt revealed a deeper underlying architectural flaw requiring design re-evaluation.
  - **needs-decision**: Circuit breaker triggered after 2 attempts; structured inquiry escalated to user.
</workflow-outcomes>
