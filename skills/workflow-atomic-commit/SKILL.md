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
  Each commit does exactly one thing; never combine cosmetic reformatting (Prettier/linter re-order) with functional logic changes. Each commit also leaves the test suite 100% green so history stays bisect-friendly, which rules out committing a broken intermediate state with the intent to fix it later. The diff already shows what changed, so the commit message explains why: the root cause, business motivation, and trade-offs.
</commit-invariants>

---

## Staging & Committing Procedure

<staging-procedure>
  1. **Inspect Working Tree**: Run git status and git diff to inspect all touched files.
  2. **Targeted Staging**: Avoid blind staging like git add . when unrelated edits exist. Stage specific files explicitly.
  3. **Verify Staged Diff**: Run git diff --cached to confirm that only intentional lines are staged.
  4. **Author & Commit**: Author a Conventional Commit message following the schema below.
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
    - **feat**: New feature or user-facing capability.
    - **fix**: Bug fix restoring intended behavior.
    - **refactor**: Code restructuring without changing observable behavior (SLAP, encapsulation).
    - **test**: Adding or correcting tests with zero production code changes.
    - **chore**: Maintenance, dependencies, build configurations.
    - **docs**: Documentation updates only.
  </permitted-types>
</commit-message-schema>

---

## Return Outcomes

<workflow-outcomes>
  - **pass**: Staged change is atomic, tests pass, and commit message clearly communicates the change rationale.
  - **needs-change**: Staged changes mix multiple responsibilities or commit message lacks the necessary Why explanation.
</workflow-outcomes>
