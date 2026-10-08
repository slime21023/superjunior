+++
title = "Sequence small units"
description = "Build on complete, checked outcomes while keeping necessary edits together."
permalink = "/skills/principle-sequence-small-units/index.html"
section = "principles"
order = 3
source = "skills/principle-sequence-small-units/SKILL.md"
+++

## When to use it

Apply to multi-step features, fixes, refactors, or migrations when the change is becoming difficult to review or later work depends on an unchecked result.

## Apply it

Name each unit's outcome, affected contracts, and acceptance check. Choose a complete result that can be understood and verified on its own.

Keep related edits together when they preserve one contract. A coherent unit can span several files. Order dependent units so an accepted result becomes a checked foundation for the next.

Check a completed unit before building on it. Label unfinished local experiments as intermediate work. Keep unrelated cleanup and optional improvements outside the unit.

## Example and record

Changing a shared return type and every affected caller may form one atomic unit. Splitting them into separately accepted deliverables could create an invalid intermediate state.

Record the unit, dependencies, performed check, and actual result in the existing task, commit, or PR record.

## Boundary

Small units do not require separate commits, branches, PRs, or compatibility layers. Use the task's authorized delivery structure. Keep necessary changes atomic when a split would misrepresent a usable result.
