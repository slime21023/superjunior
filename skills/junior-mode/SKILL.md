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

<lifecycle-route>
  <phase id="1" name="Scope Alignment" workflow="../workflow-align-scope/SKILL.md">
    Problem definition, Done criteria, and 3-tier Blast Radius matrix.
  </phase>
  <phase id="2" name="Context TDD" workflow="../workflow-context-tdd/SKILL.md">
    Context exploration, 3-quadrant test specs, and Red-Green-Refactor loop.
    <on-failure invoke="../workflow-scientific-debug/SKILL.md">
      If unexpected exception or failing test occurs, route to Scientific Debug.
    </on-failure>
  </phase>
  <phase id="3A" name="Scientific Debug" workflow="../workflow-scientific-debug/SKILL.md">
    Empirical diagnosis: observe stack trace, hypothesize, build minimal repro, fix root cause.
  </phase>
  <phase id="3B" name="Four-Layer Self-Review" workflow="../workflow-self-review/SKILL.md">
    Systematic design audit against Lexical, Function, Module, and Architecture layers.
  </phase>
  <phase id="3C" name="Atomic Commit" workflow="../workflow-atomic-commit/SKILL.md">
    Single-responsibility staged commit with an informative Why commit message.
  </phase>
</lifecycle-route>

---

## 1. Lifecycle Route & Execution Flow

### Phase 1: Scope Alignment
- Execute `workflow-align-scope`.
- Establish the plain-language problem, 2~3 observable Done Criteria, and the Blast Radius matrix.
- Sequence the steps (Types ➔ Core ➔ Verification).
- If ambiguous, halt and ask the user targeted questions before touching code.

### Phase 2: Context-First TDD
- Execute `workflow-context-tdd`.
- Explore codebase context and conventions.
- Inventory test specs (Happy Path, Boundary Conditions with empty collections `[]`, Error Scenarios).
- Execute the Red ➔ Green ➔ Refactor loop.
- If an unexpected error or regression occurs, invoke `workflow-scientific-debug` to isolate the root cause.

### Phase 3: Review, Debug & Delivery
- **Phase 3A (On Defects)**: If an exception occurs, follow `workflow-scientific-debug` to observe the stack trace, hypothesize, write a minimal reproduction test, and fix the root cause at the caller convergence point.
- **Phase 3B (Self-Review)**: Run `workflow-self-review` against the Four-Layer Software Design Principles (Lexical, Function/SLAP/CQS, Deep Module/Information Hiding, Architecture/DIP/ADP).
- **Phase 3C (Commit)**: Prepare the final delivery via `workflow-atomic-commit`, ensuring each commit has a single responsibility and a commit message that explains the "Why".

---

## 2. Managing Workflow Transitions

<workflow-transitions>
  <transition outcome="pass">
    <action>Advance to the subsequent phase on the agreed lifecycle route.</action>
  </transition>
  <transition outcome="needs-change">
    <action>Return candidate to workflow-context-tdd or workflow-scientific-debug for correction.</action>
  </transition>
  <transition outcome="unverified">
    <action>Halt and obtain missing test runner, environment configuration, or diagnostic evidence.</action>
  </transition>
  <transition outcome="needs-decision">
    <action>Halt execution; present structured inquiry with evaluated options to the user.</action>
  </transition>
</workflow-transitions>

---

## 3. Principles Applied Throughout the Loop

The coordinator actively enforces the [Four-Layer Software Design Principles](../principles-four-layer-design/SKILL.md) across all phases:
- [Lexical & Expression](../principles-lexical-expression/SKILL.md): Self-explanatory names, Why-comments, unified vocabulary.
- [Function & Control Flow](../principles-function-control-flow/SKILL.md): SLAP, CQS, error elimination by design.
- [Module Boundaries](../principles-module-boundaries/SKILL.md): Deep modules, complexity pushed down, encapsulation.
- [Architecture & Evolution](../principles-architecture-evolution/SKILL.md): DIP, ADP (DAG), domain-driven folders, Boy Scout rule.
