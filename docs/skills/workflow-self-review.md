+++
title = "Self review"
description = "Phase 3B design audit: Four-layer checklist for naming, SLAP, encapsulation, and architecture."
permalink = "/skills/workflow-self-review/index.html"
section = "workflows"
order = 4
source = "skills/workflow-self-review/SKILL.md"
+++

## When to use it

Execute prior to committing code or opening a PR to catch code smells, abstraction leaks, and structural anti-patterns.

## The four-layer audit

- **Lexical & Expression**: Check for explicit physical units, Why-comments on trade-offs, and consistent ubiquitous domain terms.
- **Function & Control Flow**: Check for SLAP, no shallow 1-line indirection, pure CQS queries, and empty collections `[]` instead of nulls.
- **Module Boundaries**: Check for deep module interfaces, complexity pushed down into internals, and strict information hiding.
- **System Architecture**: Check for DIP (domain owns abstractions), ADP (strict DAG, zero circular dependencies), and domain-driven folder structure.

## Quality gate

All temporary debug logs and commented-out code must be removed, and automated tests must pass 100% green before passing.
