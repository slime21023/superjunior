---
name: principles-module-boundaries
description: Class & Module Boundary Layer rules (Layer 3). Apply when structuring classes, modules, or services to build deep modules, push complexity down, enforce information hiding, and maximize cohesion (SRP).
license: MIT
---

# Principles: Class & Module Boundaries Layer

The module boundary layer governs how internal complexity is hidden behind minimal, powerful interfaces. A system composed of deep modules with strong encapsulation protects callers from implementation churn and limits the blast radius of future changes.

---

## 1. Deep Modules

*(Inspired by John Ousterhout's "A Philosophy of Software Design")*

A **deep module** provides a simple, narrow interface that conceals a substantial volume of complex implementation:

<module-patterns>
  | | Deep module | Shallow module |
  | :--- | :--- | :--- |
  | Interface cost | Small, simple, intuitive public API. | Wide, verbose, sprawling interface (e.g., classes with 20 getters/setters mirroring raw fields). |
  | Internal value | Substantial internal implementation (caching, retry logic, concurrency coordination, edge-case recovery). | Minimal internal logic; merely passes arguments through. |
  | Architectural leverage | High leverage: low cognitive cost to callers, high internal power. | Negative leverage: high interface cognitive cost, low benefit. |
</module-patterns>

---

## 2. Push Complexity Down

When a problem can be solved either by the caller or by the module itself, **always push the complexity down into the module**:

<complexity-down-rules>
  The module configures sensible defaults, handles thread-safety, and manages resource lifecycles internally. When the module can handle transient failures transparently, callers should not wrap every call in retry loops and fallback switches. It is far better for one module author to handle complexity once than for 50 callers to implement boilerplate error handling and coordination.
</complexity-down-rules>

---

## 3. Information Hiding

Information hiding is the primary defense against systemic fragility:

<information-hiding-constraints>
  Never expose internal mutable collections (arrays, maps, sets); return read-only views, frozen snapshots, or defensive copies. File formats, network serialization protocols, and third-party vendor schemas stay private to the adapter module, so external third-party DTOs never leak into core domain entities. Mark fields, helper methods, and internal types private, and expose access only when an explicit external consumer contract requires it.
</information-hiding-constraints>

---

## 4. Co-Change Cohesion (SRP)

The Single Responsibility Principle (SRP) is governed by **co-change**:

<cohesion-rules>
  Logic that changes for the same business reason and at the same cadence belongs together in the same module. Logic driven by different business actors or external systems is separated, even when the code looks superficially similar: two routines that perform different business calculations are not duplicate code merely because both use a loop, and forcing them into a shared abstraction couples two independent evolutionary paths.
</cohesion-rules>

---

## Verification & Audit Checklist

<audit-checklist>
  - [ ] Does the module expose a narrow, intuitive API relative to the work it accomplishes?
  - [ ] Are common error-handling, defaults, and resource cleanup handled inside the module rather than pushed onto callers?
  - [ ] Are internal mutable collections properly encapsulated?
  - [ ] Do classes group logic that changes for the same business reason, keeping separate business actors decoupled?
</audit-checklist>
