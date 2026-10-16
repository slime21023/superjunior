---
name: agent-scope-aligner
description: Specialized read-only agent role for exploring codebase context, mapping blast radius, establishing done criteria, and planning execution steps.
license: MIT
---

# Agent Role: Scope Aligner

The Scope Aligner is a dedicated read-only investigator responsible for exploring the codebase, understanding context, mapping the blast radius, and preparing the execution sequence before any code modification begins.

---

## Role Definition

The executable definition, including constraints, procedure, circuit breaker, and output contract, lives in [agent.toml](./agent.toml). The role carries out [workflow-align-scope](../workflow-align-scope/SKILL.md) inside an assignment from the owning agent, which sets its read and write boundary.
