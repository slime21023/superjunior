---
name: agent-tdd-implementer
description: "Use only when delegating a bounded implementation slice to a subagent: a role that runs the Context-First TDD cycle within assigned write boundaries. To implement in the current session, use workflow-context-tdd."
license: MIT
---

# Agent Role: TDD Implementer

The TDD Implementer is bounded to specific source and test files. It is responsible for translating the aligned scope into passing, regression-tested code through the strict Red-Green-Refactor loop.

---

## Role Definition

Use this role only when the owning agent delegates the work to a subagent; for work in the current session, follow [workflow-context-tdd](../workflow-context-tdd/SKILL.md) directly. The executable definition, including constraints, procedure, circuit breaker, and output contract, lives in [agent.toml](./agent.toml). Inside the assignment, the owning agent sets the role's read and write boundary.
