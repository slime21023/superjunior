+++
title = "Function & control flow"
description = "Single level of abstraction, CQS, concept extraction, and eliminating errors by design."
permalink = "/skills/principles-function-control-flow/index.html"
section = "principles"
order = 3
source = "skills/principles-function-control-flow/SKILL.md"
+++

## When to use it

Apply when authoring, refactoring, or reviewing functions and methods to ensure predictable execution and flattened control flow.

## Core rules

- **Single Level of Abstraction (SLAP)**: High-level functions orchestrate business steps; low-level algorithmic details are delegated to helpers.
- **Concept Extraction**: Extract functions solely to encapsulate distinct conceptual complexity; avoid shallow 1-line indirection.
- **Command-Query Separation (CQS)**: State-mutating commands return no data; queries return data with strictly zero observable side-effects.
- **Eliminate Errors by Design**: Absorb edge conditions using empty collections `[]`, `Optional`, or Null Objects, eliminating redundant null checks and exceptions.

## Boundary

Do not use exceptions for expected, normal business control flow. Keep nesting levels to at most 2 by using guard clauses and early returns.
