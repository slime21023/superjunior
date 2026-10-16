+++
title = "Architecture & evolution"
description = "Dependency inversion, acyclic dependencies, intention-revealing folders, and the Boy Scout rule."
permalink = "/skills/principles-architecture-evolution/index.html"
section = "principles"
order = 5
source = "skills/principles-architecture-evolution/SKILL.md"
+++

## When to use it

Apply when structuring packages, managing cross-module dependencies, naming directories, and performing continuous maintenance.

## Core rules

- **Dependency Inversion (DIP)**: Core business domain defines abstract interfaces; infrastructure (databases, networks, UI) depends on core abstractions.
- **Acyclic Dependencies Principle (ADP)**: Enforce a strict Directed Acyclic Graph (DAG); circular dependencies between modules are strictly prohibited.
- **Intention-Revealing Directories**: Group code by business domain; eliminate catch-all junk folders (`utils/`, `misc/`, `common/`).
- **Boy Scout Rule**: Leave the campground cleaner than you found it—invest 10%~20% effort on opportunistic micro-refactoring on every touch.

## Boundary

Micro-refactorings must stay bounded to the testable blast radius of the primary change. Do not launch unrequested broad architectural rewrites under the guise of the Boy Scout rule.
