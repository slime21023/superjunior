+++
title = "The Four-Layer Design Principles"
navTitle = "Principles overview"
description = "Core software design principles to reduce cognitive load and system complexity."
section = "principles"
order = 0
permalink = "/principles/index.html"
+++

The Four-Layer Software Design Principles provide clear, structured guidelines to reduce cognitive load and prevent architectural decay. Workflows load the principles relevant to their phase; junior-mode enforces them throughout development, testing, and review.

## Layer hierarchy

1. **Layer 4 — System Architecture & Evolution**: DIP, ADP (DAG), domain folders, Boy Scout rule
2. **Layer 3 — Class & Module Boundaries**: Deep modules, complexity pushed down, encapsulation, SRP
3. **Layer 2 — Function & Control Flow**: SLAP, concept extraction, CQS, error elimination by design
4. **Layer 1 — Lexical & Expression**: Precise naming with units, How vs Why comments, unified vocabulary

## Reference map

- [Four-layer design overview](/skills/principles-four-layer-design/): Master map aligning the four layers to reduce system complexity.
- [Lexical & expression](/skills/principles-lexical-expression/): Naming with physical units, code vs comment separation, and ubiquitous domain vocabulary.
- [Function & control flow](/skills/principles-function-control-flow/): Single Level of Abstraction (SLAP), CQS, and eliminating errors by design (empty collections `[]` instead of null).
- [Module boundaries](/skills/principles-module-boundaries/): Deep modules with simple interfaces that absorb complexity and protect callers.
- [Architecture & evolution](/skills/principles-architecture-evolution/): Inverting dependencies (DIP), preventing cycles (ADP DAG), and continuous micro-refactoring.

## Apply them across the loop

During planning and scope alignment, evaluate module boundaries and architecture to establish clean interfaces and unidirectional dependencies.

During implementation and TDD, apply the lexical and function control flow principles: write self-describing code with explicit physical units, separate commands from queries, eliminate nulls with empty collections, and keep control flow flattened with early returns.

During self-review and peer review, audit all four layers systematically. Verify that the changes did not introduce circular dependencies, leaky abstractions, or cryptic naming.

## Continuous evolution

Every modification is an opportunity to improve the codebase. Under the Boy Scout rule, spend 10% to 20% of effort on safe, opportunistic micro-refactorings—renaming ambiguous variables, removing dead code, and clarifying non-obvious invariants—keeping the repository healthy and sustainable.
