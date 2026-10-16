---
name: junior-mode
description: Master coordinator mode for the SuperJunior engineering lifecycle. Coordinate scoped tasks through scope alignment, context-first TDD, scientific debugging, four-layer self-review, and atomic commit workflows.
mode: true
outcomes: ["pass", "needs-change", "unverified", "needs-decision"]

workflows:
  align_scope: "../workflow-align-scope/SKILL.md"
  context_tdd: "../workflow-context-tdd/SKILL.md"
  scientific_debug: "../workflow-scientific-debug/SKILL.md"
  self_review: "../workflow-self-review/SKILL.md"
  atomic_commit: "../workflow-atomic-commit/SKILL.md"
---

# Junior Mode: Master Engineering Lifecycle Coordinator

Junior mode orchestrates a disciplined, verifiable engineering lifecycle. It ensures that every task advances systematically through alignment, test-driven development, empirical debugging, design self-review, and atomic delivery.

---

## 1. Lifecycle Route & Execution Flow

<lifecycle-route>
  <phase>
    **Phase 1: Scope Alignment** — [workflow-align-scope](../workflow-align-scope/SKILL.md)
    - Establish the plain-language problem, 2~3 observable Done Criteria, and the 3-tier Blast Radius matrix.
    - Sequence the steps (Types ➔ Core ➔ Verification).
    - If ambiguous, halt and ask the user targeted questions before touching code.
  </phase>
  <phase>
    **Phase 2: Context-First TDD** — [workflow-context-tdd](../workflow-context-tdd/SKILL.md)
    - Explore codebase context and conventions.
    - Inventory test specs (Happy Path, Boundary Conditions with empty collections `[]`, Error Scenarios).
    - Execute the Red ➔ Green ➔ Refactor loop.
    - **On failure**: If an unexpected exception, failing test, or regression occurs, route to Phase 3A.
  </phase>
  <phase>
    **Phase 3A: Scientific Debug (On Defects)** — [workflow-scientific-debug](../workflow-scientific-debug/SKILL.md)
    - Observe the stack trace, hypothesize, write a minimal reproduction test, and fix the root cause at the caller convergence point.
  </phase>
  <phase>
    **Phase 3B: Four-Layer Self-Review** — [workflow-self-review](../workflow-self-review/SKILL.md)
    - Audit against the Four-Layer Software Design Principles (Lexical, Function/SLAP/CQS, Deep Module/Information Hiding, Architecture/DIP/ADP).
  </phase>
  <phase>
    **Phase 3C: Atomic Commit** — [workflow-atomic-commit](../workflow-atomic-commit/SKILL.md)
    - Prepare the final delivery so each commit has a single responsibility and a commit message that explains the "Why".
  </phase>
</lifecycle-route>

---

## 2. Managing Workflow Transitions

<workflow-transitions>
  - **pass**: Advance to the subsequent phase on the agreed lifecycle route.
  - **needs-change**: Return candidate to workflow-context-tdd or workflow-scientific-debug for correction.
  - **unverified**: Halt and obtain missing test runner, environment configuration, or diagnostic evidence.
  - **needs-decision**: Halt execution; present structured inquiry with evaluated options to the user.
</workflow-transitions>

---

## 3. Principles Applied Throughout the Loop

The coordinator actively enforces the [Four-Layer Software Design Principles](../principles-four-layer-design/SKILL.md) across all phases:
- [Lexical & Expression](../principles-lexical-expression/SKILL.md): Self-explanatory names, Why-comments, unified vocabulary.
- [Function & Control Flow](../principles-function-control-flow/SKILL.md): SLAP, CQS, error elimination by design.
- [Module Boundaries](../principles-module-boundaries/SKILL.md): Deep modules, complexity pushed down, encapsulation.
- [Architecture & Evolution](../principles-architecture-evolution/SKILL.md): DIP, ADP (DAG), domain-driven folders, Boy Scout rule.
