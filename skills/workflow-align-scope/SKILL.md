---
name: workflow-align-scope
description: Phase 1 daily engineering workflow. Use before modifying code to clarify the problem in plain language, establish concrete done criteria, map the blast radius (direct, ripple, untouched), and sequence implementation steps.
outcomes: ["pass", "needs-decision"]
license: MIT
---

# Workflow: Change Scope Alignment

The Change Scope Alignment workflow acts as a mandatory pre-flight gate. It halts speculative coding and ensures that the developer/agent and stakeholders agree on the exact problem definition, acceptance criteria, blast radius, and sequential plan before touching production code.

---

## Operating Constraints & Boundaries

<constraints>
  <constraint type="no-premature-code">
    Strictly forbid outputting more than 50 lines of refactored or implementation code before confirming the blast radius.
  </constraint>
  <constraint type="concrete-boundaries">
    Prohibit vague adjectives (e.g., "improve maintainability", "optimize architecture"); explicitly identify concrete coupled files, interface breakage, or data structure changes.
  </constraint>
  <constraint type="untouched-containment">
    Strictly bound the "Untouched" scope; never drag unrelated files into the modification plan or expand scope opportunistically.
  </constraint>
</constraints>

---

## 4-Step Alignment Procedure

<procedure>
  <step id="1" name="Problem Definition & Done Criteria">
    Write 1~2 plain-language sentences defining the root problem. Enumerate 2~3 concrete, observable Done Criteria that can be verified automatically.
  </step>
  <step id="2" name="Blast Radius Mapping">
    Categorize files into three strict concentric tiers using the schema below.
  </step>
  <step id="3" name="Sequential Implementation Plan">
    Sequence execution order: Types & Contracts ➔ Core Logic ➔ Verification Commands.
  </step>
  <step id="4" name="Decision Check">
    If requirements or contracts remain ambiguous, stop and trigger the circuit breaker.
  </step>
</procedure>

---

## Blast Radius Schema

<blast-radius-schema>
  <tier name="Direct Modification">
    <description>The primary files, classes, or functions whose implementation must change.</description>
  </tier>
  <tier name="Ripple Effects">
    <description>Upstream callers, downstream consumers, database schemas, and shared types that interact with the change; regression suites to run.</description>
  </tier>
  <tier name="Untouched Boundaries">
    <description>Adjacent files, related subsystems, or potential nice-to-have enhancements that are strictly off-limits.</description>
  </tier>
</blast-radius-schema>

---

## Circuit Breaker

<circuit-breaker>
  If any business rule, contract boundary, or dependency has multiple valid interpretations, DO NOT assume silently.
  Halt execution and return needs-decision with targeted, structured multiple-choice questions for the user.
</circuit-breaker>

---

## Output Contract

<output-contract>
  Deliver the alignment card conforming to this markdown structure:

  ### 📋 Change Scope Alignment Card
  - **Problem Statement**: [1-2 plain-language sentences]
  - **Done Criteria**:
    1. [ ] [Observable criterion 1]
    2. [ ] [Observable criterion 2]
  - **Blast Radius Matrix**:
    - Direct: `path/to/target.ts`
    - Ripple: `path/to/caller.ts` (Caller compatibility)
    - Untouched: `path/to/other-service/*` (Forbidden)
  - **Execution Path**: Types -> Logic -> Test Command (`npm test ...`)
</output-contract>

---

## Return Outcomes

<workflow-outcomes>
  <outcome code="pass">Scope is unambiguous, blast radius is mapped, and execution steps are ready. Advance to workflow-context-tdd.</outcome>
  <outcome code="needs-decision">Unresolved product requirement or architectural fork detected; wait for user clarification before proceeding.</outcome>
</workflow-outcomes>
