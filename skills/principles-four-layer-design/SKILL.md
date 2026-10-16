---
name: principles-four-layer-design
description: Master architectural guideline for the Four-Layer Software Design Principles. Use when designing, refactoring, or reviewing software to reduce cognitive load and system complexity across lexical, function, module, and architecture boundaries.
license: MIT
---

# Four-Layer Software Design Principles

Software complexity grows when mental models fragment across different granularities of a codebase. The Four-Layer Software Design framework enforces clarity and predictability by partitioning design responsibilities into four distinct, coherent tiers:

<architecture-layers>
  <layer level="4" name="System Architecture & Evolution" skill="../principles-architecture-evolution/SKILL.md">
    <focus>Macro boundaries, dependency directions, package organization, and evolutionary health.</focus>
    <core-rules>Dependency Inversion (DIP), Acyclic Dependencies (ADP DAG), intention-revealing domain folders, Boy Scout rule (10%~20% micro-refactoring).</core-rules>
  </layer>
  <layer level="3" name="Class & Module Boundaries" skill="../principles-module-boundaries/SKILL.md">
    <focus>Public interfaces, information hiding, and responsibility encapsulation.</focus>
    <core-rules>Deep modules (minimal interface, substantial logic), push complexity down into internals, full encapsulation of data structures, co-change cohesion (SRP).</core-rules>
  </layer>
  <layer level="2" name="Function & Control Flow" skill="../principles-function-control-flow/SKILL.md">
    <focus>Execution flow, abstraction consistency, and error ergonomics.</focus>
    <core-rules>Single Level of Abstraction (SLAP), extract by independent concept, Command-Query Separation (CQS), eliminate errors by design (empty collections [] instead of null).</core-rules>
  </layer>
  <layer level="1" name="Lexical & Expression" skill="../principles-lexical-expression/SKILL.md">
    <focus>Identifiers, comments, and ubiquitous vocabulary.</focus>
    <core-rules>Embed physical units in names (retryIntervalMs), code explains How while comments document Why and trade-offs, strict ubiquitous domain vocabulary consistency.</core-rules>
  </layer>
</architecture-layers>

---

## The Four Layers in Practice

### 1️⃣ Lexical & Expression Layer (Intuitive & Self-Evident)
- **Precise Naming**: Embed intent, responsibility scope, and explicit physical units (e.g., `retryIntervalMs`, `maxPayloadBytes`).
- **Code vs. Comments**: Code explains **How**; comments document **Why** and the design trade-offs considered.
- **Domain Vocabulary Consistency**: Use a single ubiquitous term for every domain concept (never mix `fetch`, `get`, `retrieve`, and `query`).
- Detailed reference: [principles-lexical-expression](../principles-lexical-expression/SKILL.md)

### 2️⃣ Function & Control Flow Layer (Fluid & Predictable)
- **Single Level of Abstraction (SLAP)**: High-level functions orchestrate business steps; low-level algorithmic details are delegated to helpers.
- **Concept Extraction**: Extract functions solely to hide complexity and encapsulate distinct concepts; avoid shallow 1-line indirection.
- **Command-Query Separation (CQS)**: State-mutating commands return no data; queries return data with strictly zero observable side-effects.
- **Eliminate Errors by Design**: Absorb edge conditions using empty collections `[]`, `Optional`, or Null Objects, eliminating redundant null checks and exceptions.
- Detailed reference: [principles-function-control-flow](../principles-function-control-flow/SKILL.md)

### 3️⃣ Class & Module Boundary Layer (Minimal Interfaces & High Cohesion)
- **Deep Modules**: Expose clean, minimal public interfaces backed by substantial internal functionality (high value-to-interface ratio).
- **Push Complexity Down**: Absorb state management, fallback defaults, and retries inside the module to lift the burden off callers.
- **Information Hiding**: Fully encapsulate internal algorithms and collections; never expose mutable internal state.
- **Cohesion & Single Responsibility (SRP)**: Group logic that changes together; separate logic driven by different business actors.
- Detailed reference: [principles-module-boundaries](../principles-module-boundaries/SKILL.md)

### 4️⃣ System Architecture & Evolution Layer (Resilience & Boundary Compliance)
- **Dependency Inversion (DIP)**: Core business domain defines abstract interfaces; infrastructure (databases, networks, UI) depends on core abstractions.
- **Acyclic Dependencies Principle (ADP)**: Enforce a strict Directed Acyclic Graph (DAG); circular dependencies between modules are strictly prohibited.
- **Intention-Revealing Directories**: Group code by business domain; eliminate catch-all junk folders (`utils/`, `misc/`, `common/`).
- **Boy Scout Rule**: Leave the campground cleaner than you found it—invest 10%~20% effort on opportunistic micro-refactoring on every touch.
- Detailed reference: [principles-architecture-evolution](../principles-architecture-evolution/SKILL.md)

---

## When to Apply

<application-matrix>
  <phase name="Planning & Scope Alignment">Review Layer 3 (Deep Modules) and Layer 4 (Architecture) to establish clean boundaries and dependencies.</phase>
  <phase name="Implementation & TDD">Apply Layer 1 (Lexical) and Layer 2 (Function) while writing tests and minimal implementations.</phase>
  <phase name="Code Review & Delivery">Cross-check code changes against all four layers to prevent complexity leakage and cognitive drift.</phase>
</application-matrix>
