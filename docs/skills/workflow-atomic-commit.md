+++
title = "Atomic commit"
description = "Phase 3C delivery: Single-responsibility commits with informative Why-rationale messages."
permalink = "/skills/workflow-atomic-commit/index.html"
section = "workflows"
order = 5
source = "skills/workflow-atomic-commit/SKILL.md"
+++

## When to use it

Execute when staging, splitting, and finalizing git commits for delivery.

## Core invariants

1. **One Commit, One Responsibility**: Never mix formatting, refactoring, and functional changes in the same commit.
2. **Every Commit Builds and Passes Tests**: Intermediate broken commits are forbidden; every commit must be independently releasable or bisect-friendly.
3. **Commit Messages Explain "Why"**: The diff documents what changed; the commit message explains the business problem, context, and trade-offs.

## Structure

Follow Conventional Commits (`type(scope): summary`) with a body detailing root cause and preserved invariants.
