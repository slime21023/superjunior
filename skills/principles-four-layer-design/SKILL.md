---
name: principles-four-layer-design
description: Master architectural guideline for the Four-Layer Software Design Principles. Use when designing, refactoring, or reviewing software to reduce cognitive load and system complexity across lexical, function, module, and architecture boundaries.
license: MIT
---

# Four-Layer Software Design Principles

Software complexity grows when mental models fragment across different granularities of a codebase. The Four-Layer Software Design framework enforces clarity and predictability by partitioning design responsibilities into four distinct, coherent tiers, from naming at Layer 1 up to system architecture at Layer 4.

---

## The Four Layers in Practice

### Layer 1: Lexical & Expression Layer (Intuitive & Self-Evident)
This layer governs identifiers, comments, and ubiquitous vocabulary.

- **Precise Naming**: Embed intent, responsibility scope, and explicit physical units (e.g., `retryIntervalMs`, `maxPayloadBytes`).
- **Code vs. Comments**: Code explains **How**; comments document **Why** and the design trade-offs considered.
- **Domain Vocabulary Consistency**: Use a single ubiquitous term for every domain concept (never mix `fetch`, `get`, `retrieve`, and `query`).
- Detailed reference: [principles-lexical-expression](../principles-lexical-expression/SKILL.md)

### Layer 2: Function & Control Flow Layer (Fluid & Predictable)
This layer governs execution flow, abstraction consistency, and error ergonomics.

- **Single Level of Abstraction (SLAP)**: High-level functions orchestrate business steps; low-level algorithmic details are delegated to helpers.
- **Concept Extraction**: Extract functions solely to hide complexity and encapsulate distinct concepts; avoid shallow 1-line indirection.
- **Command-Query Separation (CQS)**: State-mutating commands return no data; queries return data with strictly zero observable side-effects.
- **Eliminate Errors by Design**: Absorb edge conditions using empty collections `[]`, `Optional`, or Null Objects, eliminating redundant null checks and exceptions.
- Detailed reference: [principles-function-control-flow](../principles-function-control-flow/SKILL.md)

### Layer 3: Class & Module Boundary Layer (Minimal Interfaces & High Cohesion)
This layer governs public interfaces, information hiding, and responsibility encapsulation.

- **Deep Modules**: Expose clean, minimal public interfaces backed by substantial internal functionality (high value-to-interface ratio).
- **Push Complexity Down**: Absorb state management, fallback defaults, and retries inside the module to lift the burden off callers.
- **Information Hiding**: Fully encapsulate internal algorithms and collections; never expose mutable internal state.
- **Cohesion & Single Responsibility (SRP)**: Group logic that changes together; separate logic driven by different business actors.
- Detailed reference: [principles-module-boundaries](../principles-module-boundaries/SKILL.md)

### Layer 4: System Architecture & Evolution Layer (Resilience & Boundary Compliance)
This layer governs macro boundaries, dependency directions, package organization, and evolutionary health.

- **Dependency Inversion (DIP)**: Core business domain defines abstract interfaces; infrastructure (databases, networks, UI) depends on core abstractions.
- **Acyclic Dependencies Principle (ADP)**: Enforce a strict Directed Acyclic Graph (DAG); circular dependencies between modules are strictly prohibited.
- **Intention-Revealing Directories**: Group code by business domain; eliminate catch-all junk folders (`utils/`, `misc/`, `common/`).
- **Boy Scout Rule**: Leave the campground cleaner than you found it—invest 10%~20% effort on opportunistic micro-refactoring on every touch.
- Detailed reference: [principles-architecture-evolution](../principles-architecture-evolution/SKILL.md)

---

## When to Apply

<application-matrix>
  During planning and scope alignment, review Layer 3 (Deep Modules) and Layer 4 (Architecture) to establish clean boundaries and dependencies. During implementation and TDD, apply Layer 1 (Lexical) and Layer 2 (Function) while writing tests and minimal implementations. During code review and delivery, cross-check code changes against all four layers to prevent complexity leakage and cognitive drift.
</application-matrix>
