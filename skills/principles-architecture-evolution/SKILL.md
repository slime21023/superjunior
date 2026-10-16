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
  <principle-statement>
    High-level policy and core business logic must not depend on low-level technical details (databases, file systems, HTTP frameworks, message brokers). Both must depend on abstractions.
  </principle-statement>
  <direction-rules>
    <rule type="core-defines-abstractions">
      The domain core defines the abstract interfaces (e.g., UserRepository, PaymentGateway).
    </rule>
    <rule type="infrastructure-implements-abstractions">
      The infrastructure layer implements those domain-defined interfaces.
    </rule>
    <rule type="pluggable-infrastructure">
      Business rules remain testable without network or database dependencies, and resilient to technology migrations.
    </rule>
  </direction-rules>
</dependency-inversion>

---

## 2. Acyclic Dependencies Principle (ADP)

<acyclic-dependencies>
  <graph-rule>The dependency structure between packages and modules must form a strict Directed Acyclic Graph (DAG).</graph-rule>
  <zero-cycles-rule>Module A must never depend on Module B if Module B depends on Module A (directly or transitively).</zero-cycles-rule>
  <cycle-breaking-strategies>
    <strategy id="extract-shared-contract">Extract the shared contract into an independent, lower-tier module that both depend on.</strategy>
    <strategy id="invert-dependency">Use Dependency Inversion (DIP) to reverse one of the dependency arrows via an interface.</strategy>
  </cycle-breaking-strategies>
</acyclic-dependencies>

---

## 3. Intention-Revealing Directory Structure

Directories should scream the business domain and system purpose, not generic technical plumbing:

<directory-structure-rules>
  <rule type="domain-grouping">
    Group files by feature or business domain (e.g., billing/, auth/, orders/, inventory/).
  </rule>
  <rule type="forbid-junk-drawers">
    Strictly forbid generic grab-bag directories such as utils/, misc/, common/, helpers/.
  </rule>
  <rule type="decompose-temptations">
    When tempted to create utils.ts, identify the cohesive domain concept (e.g., formatting/currency.ts, crypto/tokens.ts) or push the logic down into the consuming module.
  </rule>
</directory-structure-rules>

---

## 4. Boy Scout Rule & Continuous Micro-Refactoring

*"Always leave the campground cleaner than you found it."*

<boy-scout-budget>
  <budget-allocation>Allocate 10%~20% of effort on every task to tidy up the immediate surrounding code.</budget-allocation>
  <permitted-actions>
    <action>Rename an ambiguous variable encountered during the fix.</action>
    <action>Delete dead code made obsolete by your change.</action>
    <action>Extract a confusing boolean conditional into an intention-revealing variable.</action>
    <action>Clarify an outdated or misleading comment.</action>
  </permitted-actions>
  <negative-constraints>
    Micro-refactorings must remain surgical and within the testable blast radius of the primary change. Never launch an unrequested multi-module rewrite under the guise of the Boy Scout rule.
  </negative-constraints>
</boy-scout-budget>

---

## Verification & Audit Checklist

<audit-checklist>
  <item check="dip">Does dependency flow point inward toward domain abstractions?</item>
  <item check="adp">Are modules free of bidirectional or circular dependencies?</item>
  <item check="directories">Are new files placed in domain-driven folders rather than utils/ or misc/?</item>
  <item check="boy-scout">Did this change safely leave the touched files cleaner than before?</item>
</audit-checklist>
