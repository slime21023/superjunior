---
name: workflow-atomic-commit
description: Phase 3C daily engineering workflow. Atomic version control and commit message craft. Use when staging changes, splitting commits, and composing commit messages that explain the "Why" and business rationale behind each change.
outcomes: ["pass", "needs-change"]
license: MIT
---

# Workflow: Atomic Version Control

Atomic version control ensures that every commit in the repository history represents a single, self-contained, logically coherent unit of change that builds cleanly, passes tests, and can be safely cherry-picked or reverted in isolation.

---

## 3 Core Commit Invariants

<commit-invariants>
  <invariant id="1" name="Single Responsibility">
    A single commit must do exactly one thing. Never combine cosmetic reformatting (Prettier/linter re-order) with functional logic modifications in the same commit.
  </invariant>
  <invariant id="2" name="Always Passing Builds">
    Never commit broken intermediate states with the intent to fix it later. Every commit must leave the test suite 100% green and bisect-friendly.
  </invariant>
  <invariant id="3" name="Explain the Why">
    The Git diff already shows What changed. The commit message must explain Why it was changed, including the root cause, business motivation, and trade-offs.
  </invariant>
</commit-invariants>

---

## Staging & Committing Procedure

<staging-procedure>
  <step id="1" name="Inspect Working Tree">
    Run git status and git diff to inspect all touched files.
  </step>
  <step id="2" name="Targeted Staging">
    Avoid blind staging like git add . when unrelated edits exist. Stage specific files explicitly.
  </step>
  <step id="3" name="Verify Staged Diff">
    Run git diff --cached to confirm that only intentional lines are staged.
  </step>
  <step id="4" name="Author & Commit">
    Author a Conventional Commit message following the schema below.
  </step>
</staging-procedure>

---

## Commit Message Schema

<commit-message-schema>
  Format the commit message adhering to Conventional Commits with a rationale body:

  ```text
  <type>(<scope>): <short imperative summary>

  - Why: Explain the root cause, background context, or problem being addressed.
  - Trade-offs: Note any alternative approaches considered and rejected.
  - Invariants: Note any specific business rules or contracts preserved.

  Closes #123
  ```

  <permitted-types>
    <type name="feat">New feature or user-facing capability.</type>
    <type name="fix">Bug fix restoring intended behavior.</type>
    <type name="refactor">Code restructuring without changing observable behavior (SLAP, encapsulation).</type>
    <type name="test">Adding or correcting tests with zero production code changes.</type>
    <type name="chore">Maintenance, dependencies, build configurations.</type>
    <type name="docs">Documentation updates only.</type>
  </permitted-types>
</commit-message-schema>

---

## Return Outcomes

<workflow-outcomes>
  <outcome code="pass">Staged change is atomic, tests pass, and commit message clearly communicates the change rationale.</outcome>
  <outcome code="needs-change">Staged changes mix multiple responsibilities or commit message lacks the necessary Why explanation.</outcome>
</workflow-outcomes>
