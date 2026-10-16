+++
title = "Four-layer software design"
description = "Overview of the four design layers to reduce cognitive load and system complexity."
permalink = "/skills/principles-four-layer-design/index.html"
section = "principles"
order = 1
source = "skills/principles-four-layer-design/SKILL.md"
+++

## When to use it

Apply when designing new modules, planning system architecture, executing refactorings, or conducting pre-commit self-reviews.

## The four layers

1. **Lexical & Expression Layer**: Precise naming with explicit physical units, clear separation of code (How) and comments (Why/Trade-offs), and a single ubiquitous domain vocabulary.
2. **Function & Control Flow Layer**: Single Level of Abstraction (SLAP), extracting functions strictly by concept, Command-Query Separation (CQS), and error elimination by design (empty collections `[]` instead of nulls).
3. **Class & Module Boundaries Layer**: Deep modules exposing minimal interfaces, pushing complexity down into module internals, strict information hiding, and co-change cohesion (SRP).
4. **System Architecture & Evolution Layer**: Dependency Inversion (DIP), Acyclic Dependencies (ADP DAG), intention-revealing directory structures, and the Boy Scout rule (10%~20% micro-refactoring budget).

## Practical impact

This framework aligns every granularity of a codebase—from single variable names to cross-package dependencies—ensuring predictable, readable, and highly maintainable systems.
