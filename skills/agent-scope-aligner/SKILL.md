---
name: agent-scope-aligner
description: "Use only when delegating scope alignment to a subagent: a read-only role that explores codebase context, maps the blast radius, sets Done Criteria, and plans execution steps. For scope alignment in the current session, use workflow-align-scope."
license: MIT
---

# Agent Role: Scope Aligner

The Scope Aligner is a dedicated read-only investigator responsible for exploring the codebase, understanding context, mapping the blast radius, and preparing the execution sequence before any code modification begins.

---

## Role Definition

Use this role only when the owning agent delegates the work to a subagent; for work in the current session, follow [workflow-align-scope](../workflow-align-scope/SKILL.md) directly. The executable definition, including constraints, procedure, circuit breaker, and output contract, lives in [agent.toml](./agent.toml). Inside the assignment, the owning agent sets the role's read and write boundary.
