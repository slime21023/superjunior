---
name: principle-sequence-small-units
description: Divide multi-step features, fixes, refactors, or migrations into small, complete units with observable acceptance checks. Use when a change is becoming hard to review or when later work depends on an unverified intermediate result.
---

# Sequence Small Units

Choose the smallest complete outcome that can be checked and understood on its own.

## Apply

- Name each unit's outcome, affected contracts, and acceptance check before expanding the change.
- Keep related edits together when they are necessary to preserve a contract. A coherent unit can span several files.
- Order dependent units so that an accepted result provides a checked foundation for the next unit.
- Check each completed unit before building on it. During unfinished local work, distinguish an intermediate experiment from an accepted deliverable.
- Keep unrelated cleanup and optional improvements outside the current unit. Record a follow-up only when it addresses a demonstrated need.
- When splitting would create invalid or misleading deliverables, keep the necessary change atomic and explain its boundary.

## Evidence

Identify the unit, its dependencies, the check performed, and the observed result. Use existing task, commit, or PR records where appropriate.

## Boundaries

Do not create commits, branches, PRs, or compatibility layers solely to satisfy this principle. Use the delivery structure appropriate to the authorized task.
