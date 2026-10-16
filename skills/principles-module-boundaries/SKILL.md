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
  <deep-module>
    <interface-cost>Small, simple, intuitive public API.</interface-cost>
    <internal-value>Substantial internal implementation (caching, retry logic, concurrency coordination, edge-case recovery).</internal-value>
    <architectural-leverage>High leverage: low cognitive cost to callers, high internal power.</architectural-leverage>
  </deep-module>
  <shallow-module>
    <interface-cost>Wide, verbose, sprawling interface (e.g., classes with 20 getters/setters mirroring raw fields).</interface-cost>
    <internal-value>Minimal internal logic; merely passes arguments through.</internal-value>
    <architectural-leverage>Negative leverage: high interface cognitive cost, low benefit.</architectural-leverage>
  </shallow-module>
</module-patterns>

---

## 2. Push Complexity Down

When a problem can be solved either by the caller or by the module itself, **always push the complexity down into the module**:

<complexity-down-rules>
  <rule type="sane-defaults">
    The module must configure sensible defaults, handle thread-safety, and manage resource lifecycles internally.
  </rule>
  <rule type="transparent-resilience">
    Callers should not wrap every call in retry loops and fallback switches if the module can handle transient failures transparently.
  </rule>
  <rule type="leverage-principle">
    It is far better for 1 module author to handle complexity once than for 50 callers to suffer implementing boilerplate error-handling and coordination.
  </rule>
</complexity-down-rules>

---

## 3. Information Hiding

Information hiding is the primary defense against systemic fragility:

<information-hiding-constraints>
  <constraint type="encapsulate-data-structures">
    Never expose internal mutable collections (arrays, maps, sets). Return read-only views, frozen snapshots, or defensive copies.
  </constraint>
  <constraint type="isolate-protocols">
    File formats, network serialization protocols, and third-party vendor schemas must remain private to the adapter module. Never let external third-party DTOs leak into core domain entities.
  </constraint>
  <constraint type="private-by-default">
    Mark fields, helper methods, and internal types private. Expose access only when an explicit external consumer contract requires it.
  </constraint>
</information-hiding-constraints>

---

## 4. Co-Change Cohesion (SRP)

The Single Responsibility Principle (SRP) is governed by **co-change**:

<cohesion-rules>
  <rule type="gather-co-changes">
    Logic that changes for the same business reason and at the same cadence belongs together in the same module.
  </rule>
  <rule type="separate-independent-drivers">
    Logic driven by different business actors or external systems must be separated, even if the code looks superficially similar.
  </rule>
  <rule type="avoid-premature-sharing">
    Two routines that perform different business calculations are not duplicate code merely because both use a loop. Forcing them into a shared abstraction couples two independent evolutionary paths.
  </rule>
</cohesion-rules>

---

## Verification & Audit Checklist

<audit-checklist>
  <item check="deep-module">Does the module expose a narrow, intuitive API relative to the work it accomplishes?</item>
  <item check="complexity-down">Are common error-handling, defaults, and resource cleanup handled inside the module rather than pushed onto callers?</item>
  <item check="encapsulation">Are internal mutable collections properly encapsulated?</item>
  <item check="cohesion">Do classes group logic that changes for the same business reason, keeping separate business actors decoupled?</item>
</audit-checklist>
