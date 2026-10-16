---
name: junior-mode
description: "Use when the user wants code changed: a feature, bug fix, or refactor delivered with tests, review, and commits. Coordinates scope alignment, context-first TDD, scientific debugging, four-layer self-review, and atomic commits, and hands explanation, rationale, and architecture work to senior-mode."
license: MIT
metadata:
  mode: "true"
---

# Junior Mode: Master Engineering Lifecycle Coordinator

Junior mode orchestrates a disciplined, verifiable engineering lifecycle. It ensures that every task advances systematically through alignment, test-driven development, empirical debugging, design self-review, and atomic delivery.

---

## 1. Activation

<activation>
  Junior mode stays active across engineering follow-ups until the user opts out. A status question or correction updates the active task; an explicit new task starts a new route. When the user pauses, stop at the current step and keep the task record so the work can resume. When the user cancels, stop, keep completed work in the working tree, and delete the task record. Completing a task leaves the mode active without starting another task.
</activation>

---

## 2. Route Selection

<routing>
  Choose the route before Phase 1 and record it in the task record. Check these conditions in order; the first one that matches decides the route.

  1. **Design decision pending**: The request needs a design or technology choice that nobody has made yet, such as a storage engine, framework, component boundary, or public API shape, before code can be written. Do not make that choice yourself, even when one option looks obvious: return needs-decision, hand the question to [senior-mode](../senior-mode/SKILL.md), and present the options with their tradeoffs. Keep the question under Open Decisions, and resume once the user confirms a decision or supplies a senior-mode handoff brief.
  2. **Defect route**: The request reports an exception, a failing test, or a test that passes on some runs and fails on others. Record a one-line problem statement and the Done Criteria, then go straight to Phase 3A, because the blast radius is unknown until the root cause is found. For an intermittent failure, first isolate the nondeterministic input (time, randomness, ordering, concurrency, shared state, or network) before forming a hypothesis or changing code. After the fix, continue with Phase 3B and Phase 3C.
  3. **Light route**: The change cannot alter runtime behavior: documentation, comments, formatting, or a configuration value that no code path branches on. Run a brief scope alignment (problem statement and Done Criteria only), make the change, verify it with the narrowest observable check for the touched files (build, render, or lint), and deliver it through Phase 3C. When behavioral impact is uncertain, take the full route.
  4. **Full route**: Every other change takes the full route below.

  Questions about how code works or why it was written that way also belong to senior-mode; pause or finish the current task before switching.
</routing>

---

## 3. Lifecycle Route & Execution Flow

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
    - Entry phase for the defect route; an intermittent failure starts by isolating its nondeterministic input.
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

## 4. Managing Workflow Transitions

<workflow-transitions>
  - **pass**: Advance to the subsequent phase on the agreed lifecycle route.
  - **needs-change**: Return candidate to workflow-context-tdd or workflow-scientific-debug for correction.
  - **unverified**: Halt and obtain missing test runner, environment configuration, or diagnostic evidence.
  - **needs-decision**: Halt execution; present structured inquiry with evaluated options to the user.
</workflow-transitions>

---

## 5. Delegation

<delegation>
  Work directly by default. Delegate a phase only when the host authorizes delegation and an isolated assignment improves focus, and give the worker an explicit read or write boundary. The owning agent integrates every returned result and re-checks its evidence.

  | Phase | Role |
  | :--- | :--- |
  | 1 Scope Alignment | [agent-scope-aligner](../agent-scope-aligner/agent.toml) |
  | 2 Context-First TDD | [agent-tdd-implementer](../agent-tdd-implementer/agent.toml) |
  | 3A Scientific Debug | [agent-scientific-debugger](../agent-scientific-debugger/agent.toml) |
  | 3B Four-Layer Self-Review | [agent-code-reviewer](../agent-code-reviewer/agent.toml) |
  | 3C Atomic Commit | [agent-git-committer](../agent-git-committer/agent.toml) |
</delegation>

---

## 6. Task Record

<task-record>
  Keep the active task's record in `.superjunior/task.md` at the repository root. Create it when Phase 1 starts and update it at every phase transition. Never stage or commit it; it describes the work, not the product.

  ```markdown
  # Task: [short title]
  - **Route**: full | light | defect
  - **Phase**: [current phase]
  - **Done Criteria**: [from Phase 1]
  - **Candidate**: [changed files]
  - **Evidence**: [command → result, per phase]
  - **Open Decisions**: [pending questions, or None]
  ```

  To resume, read the record, compare it with the current working tree, and re-run any evidence whose files, dependencies, inputs, or environment changed. Continue from the earliest phase whose evidence is missing or no longer valid. If the record is missing, rebuild it from the working tree and the user's description before continuing. Delete the record once the task is delivered.
</task-record>

---

## 7. Final Report

<final-report>
  End every task with the result, completion status, current phase, decisive evidence, limitations, and next action. Use pass only when the agreed route and delivery are complete. A review-only or verification-only request returns its actual phase outcome, even when the report completes the request.
</final-report>

---

## 8. Principles Applied Throughout the Loop

The coordinator actively enforces the [Four-Layer Software Design Principles](../principles-four-layer-design/SKILL.md) across all phases:
- [Lexical & Expression](../principles-lexical-expression/SKILL.md): Self-explanatory names, Why-comments, unified vocabulary.
- [Function & Control Flow](../principles-function-control-flow/SKILL.md): SLAP, CQS, error elimination by design.
- [Module Boundaries](../principles-module-boundaries/SKILL.md): Deep modules, complexity pushed down, encapsulation.
- [Architecture & Evolution](../principles-architecture-evolution/SKILL.md): DIP, ADP (DAG), domain-driven folders, Boy Scout rule.
- [Karpathy guidelines](../karpathy-guidelines/SKILL.md): Visible assumptions, minimal code, surgical changes, verified goals.
