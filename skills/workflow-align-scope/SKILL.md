---
name: workflow-align-scope
description: "Use before modifying code, as Phase 1 of junior-mode or on its own, to state the problem in plain language, set concrete Done Criteria, map the blast radius (direct, ripple, untouched), and sequence implementation steps."
license: MIT
---

# Workflow: Change Scope Alignment

The Change Scope Alignment workflow acts as a mandatory pre-flight gate. It halts speculative coding and ensures that the developer/agent and stakeholders agree on the exact problem definition, acceptance criteria, blast radius, and sequential plan before touching production code.

---

## Operating Constraints & Boundaries

<constraints>
  Do not write more than 50 lines of refactored or implementation code until the blast radius is confirmed; code written earlier anchors the plan to a guess. Describe scope in concrete terms — coupled files, interface breakage, data structure changes — rather than vague adjectives such as "improve maintainability" or "optimize architecture". Files in the Untouched tier stay out of the modification plan, even when a nearby improvement is tempting.
</constraints>

---

## 4-Step Alignment Procedure

<procedure>
  1. **Problem Definition & Done Criteria**: Write 1~2 plain-language sentences defining the root problem. Enumerate 2~3 concrete, observable Done Criteria that can be verified automatically.
  2. **Blast Radius Mapping**: Categorize files into three strict concentric tiers using the schema below.
  3. **Sequential Implementation Plan**: Sequence execution order: Types & Contracts ➔ Core Logic ➔ Verification Commands.
  4. **Decision Check**: If requirements or contracts remain ambiguous, stop and trigger the circuit breaker.
</procedure>

---

## Blast Radius Schema

<blast-radius-schema>
  - **Direct Modification**: The primary files, classes, or functions whose implementation must change.
  - **Ripple Effects**: Upstream callers, downstream consumers, database schemas, and shared types that interact with the change; regression suites to run.
  - **Untouched Boundaries**: Adjacent files, related subsystems, or potential nice-to-have enhancements that are strictly off-limits.
</blast-radius-schema>

---

## Circuit Breaker

<circuit-breaker>
  If any business rule, contract boundary, or dependency has more than one valid interpretation, do not choose one silently. Halt and return needs-decision with targeted, structured multiple-choice questions for the user.
</circuit-breaker>

---

## Output Contract

<output-contract>
  Deliver the alignment card conforming to this markdown structure:

  ### Change Scope Alignment Card
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
  - **pass**: Scope is unambiguous, blast radius is mapped, and execution steps are ready. Advance to workflow-context-tdd.
  - **needs-decision**: Unresolved product requirement or architectural fork detected; wait for user clarification before proceeding.
</workflow-outcomes>
