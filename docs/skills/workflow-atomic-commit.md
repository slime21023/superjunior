+++
title = "Atomic commit"
description = "Stage and commit work as single-purpose commits that pass the tests and explain why the change was made."
permalink = "/skills/workflow-atomic-commit/index.html"
section = "workflows"
order = 5
source = "skills/workflow-atomic-commit/SKILL.md"
+++

## When to use it

Use it when staging changes, splitting work into commits, or writing commit messages. It is the last phase of the full, defect, and light routes in [junior mode](/skills/junior-mode/).

## What it does

1. Inspects the working tree and the full diff.
2. Stages specific files rather than everything at once when unrelated edits are present. The `.superjunior/` task record is never staged.
3. Reviews the staged diff to confirm only the intended lines are included.
4. Writes a Conventional Commits message and commits.

Each commit follows three rules. It does one thing, so reformatting never shares a commit with a behavior change. It leaves the tests passing, so any commit can be checked out, reverted, or bisected on its own. Its message explains why: the diff already shows what changed.

The message starts with a type, an optional scope, and a short imperative summary, such as `fix(billing): round totals once per invoice`. The body covers the reason for the change, alternatives that were rejected, and any rules or contracts the change preserves. The allowed types are `feat`, `fix`, `refactor`, `test`, `chore`, and `docs`.

## What you get

Commits in your repository history that each hold one coherent change with a clear rationale, returned as `pass`. If the staged changes mix several purposes or the message does not explain why, the outcome is `needs-change`.

## Boundaries

The workflow does not commit a broken intermediate state with a plan to fix it later. It packages work that is already done and verified; run [self review](/skills/workflow-self-review/) first if the diff has not been checked.

## Example request

```text
Use workflow-atomic-commit. My working tree has a bug fix and some unrelated formatting changes; split them into separate commits.
```
