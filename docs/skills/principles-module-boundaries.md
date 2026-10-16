+++
title = "Module boundaries"
description = "Deep modules, pushing complexity down, information hiding, and co-change cohesion."
permalink = "/skills/principles-module-boundaries/index.html"
section = "principles"
order = 4
source = "skills/principles-module-boundaries/SKILL.md"
+++

## When to use it

Apply when organizing classes, modules, and public APIs to build robust boundaries and minimize external blast radius.

## Core rules

- **Deep Modules**: Expose clean, minimal public interfaces backed by substantial internal functionality (maximizing leverage).
- **Push Complexity Down**: Absorb state management, fallback defaults, and retries inside the module to lift the burden off callers.
- **Information Hiding**: Fully encapsulate internal algorithms and collections; never expose mutable internal data structures.
- **Co-Change Cohesion (SRP)**: Group logic that changes together; separate logic driven by different business actors.

## Boundary

Do not expose internal implementation data structures merely for test inspection. Test public interfaces instead.
