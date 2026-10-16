---
name: workflow-scientific-debug
description: Phase 3A daily engineering workflow. Scientific debugging protocol. Use when encountering an exception, failing test, or unexpected defect to parse stack traces, formulate falsifiable hypotheses, write minimal reproduction tests, and fix root causes.
outcomes: ["pass", "needs-change", "needs-decision"]
license: MIT
---

# Workflow: Scientific Debugging

Scientific debugging replaces trial-and-error "shotgun debugging" with an empirical, hypothesis-driven protocol. It guarantees that bugs are reproduced deterministically, diagnosed at their root cause, and permanently sealed against regression.

---

## Operating Constraints

<constraints>
  <constraint type="no-shotgun-fixes">
    Strictly forbid random trial-and-error code edits without hypothesis verification and reproduction tests.
  </constraint>
  <constraint type="root-cause-convergence">
    Strictly forbid scattering defensive patches across individual callers. You must fix the root cause at the convergence point shared by all callers.
  </constraint>
  <constraint type="bounded-blast-radius">
    Edits must touch only the minimal reproduction test and the root-cause source files. Never perform broad, unrequested refactorings under the guise of debugging.
  </constraint>
</constraints>

---

## 5-Step Empirical Protocol

<debug-protocol>
  <step id="1" name="Observe">
    Parse raw error messages, stack traces, and relevant system logs. Identify the exact exception type, breached line number, and runtime context payloads.
  </step>
  <step id="2" name="Hypothesize">
    Formulate 1~2 concrete, falsifiable hypotheses explaining why the invariant broke. Never edit production code without a clear hypothesis.
  </step>
  <step id="3" name="Minimal Repro">
    Author an isolated minimal reproduction test that reproduces the failure deterministically. Confirm that it fails exclusively with the targeted error.
  </step>
  <step id="4" name="Root-Cause Fix">
    Trace where all callers converge and fix the broken invariant at the shared foundation. Absorb boundary conditions with empty collections or deep module defaults.
  </step>
  <step id="5" name="Verify Green">
    Confirm that the reproduction test turns green and run all sibling module suites to verify zero regression.
  </step>
</debug-protocol>

---

## Circuit Breaker: Structured Escalation

<circuit-breaker>
  If a bug resists diagnosis or 2 successive fix attempts fail without yielding new diagnostic evidence, immediately halt execution!
  Do not make random edits. Escalate to the user or team using the escalation schema below.
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
  <outcome code="pass">Defect reproduced with minimal test, root cause resolved at caller convergence, and suite passing green.</outcome>
  <outcome code="needs-change">Reproduction check or fix attempt revealed a deeper underlying architectural flaw requiring design re-evaluation.</outcome>
  <outcome code="needs-decision">Circuit breaker triggered after 2 attempts; structured inquiry escalated to user.</outcome>
</workflow-outcomes>
