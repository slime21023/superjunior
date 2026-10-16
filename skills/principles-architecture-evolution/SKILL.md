---
name: principles-architecture-evolution
description: System Architecture & Evolution Layer rules (Layer 4). Apply when organizing packages, directory structures, dependency directions (DIP/ADP), and practicing opportunistic micro-refactoring (Boy Scout Rule).
license: MIT
---

# Principles: System Architecture & Evolution Layer

The system architecture and evolution layer governs long-term code health, boundaries between business domains and infrastructure, and the continuous maintenance habits that prevent technical debt from accumulating.

---

## 1. Dependency Inversion Principle (DIP)

<dependency-inversion>
  High-level policy and core business logic do not depend on low-level technical details such as databases, file systems, HTTP frameworks, or message brokers; both depend on abstractions. The domain core defines the abstract interfaces (e.g., UserRepository, PaymentGateway), and the infrastructure layer implements them. As a result, business rules stay testable without network or database dependencies and survive technology migrations.
</dependency-inversion>

---

## 2. Acyclic Dependencies Principle (ADP)

<acyclic-dependencies>
  The dependency structure between packages and modules forms a strict Directed Acyclic Graph (DAG): Module A never depends on Module B if Module B depends on Module A, directly or transitively. To break a cycle, either extract the shared contract into an independent, lower-tier module that both depend on, or use Dependency Inversion (DIP) to reverse one of the dependency arrows through an interface.
</acyclic-dependencies>

---

## 3. Intention-Revealing Directory Structure

Directories should scream the business domain and system purpose, not generic technical plumbing:

<directory-structure-rules>
  Group files by feature or business domain (e.g., billing/, auth/, orders/, inventory/). Generic grab-bag directories such as utils/, misc/, common/, and helpers/ are not allowed, because they name no domain and attract unrelated code. When tempted to create utils.ts, identify the cohesive domain concept (e.g., formatting/currency.ts, crypto/tokens.ts) or push the logic down into the consuming module.
</directory-structure-rules>

---

## 4. Boy Scout Rule & Continuous Micro-Refactoring

*"Always leave the campground cleaner than you found it."*

<boy-scout-budget>
  Allocate 10%~20% of effort on every task to tidy up the immediate surrounding code, for example:

  - Rename an ambiguous variable encountered during the fix.
  - Delete dead code made obsolete by your change.
  - Extract a confusing boolean conditional into an intention-revealing variable.
  - Clarify an outdated or misleading comment.

  Keep these micro-refactorings surgical and within the testable blast radius of the primary change; the Boy Scout rule never justifies an unrequested multi-module rewrite.
</boy-scout-budget>

---

## Verification & Audit Checklist

<audit-checklist>
  - [ ] Does dependency flow point inward toward domain abstractions?
  - [ ] Are modules free of bidirectional or circular dependencies?
  - [ ] Are new files placed in domain-driven folders rather than utils/ or misc/?
  - [ ] Did this change safely leave the touched files cleaner than before?
</audit-checklist>
