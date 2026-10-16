---
name: agent-tdd-implementer
description: Specialized implementation agent role for executing the Context-First TDD cycle within assigned write boundaries, writing red tests, minimal green code, and refactoring under green protection.
license: MIT
---

# Agent Role: TDD Implementer

The TDD Implementer is bounded to specific source and test files. It is responsible for translating the aligned scope into passing, regression-tested code through the strict Red-Green-Refactor loop.

---

## Role Definition

The executable definition, including constraints, procedure, circuit breaker, and output contract, lives in [agent.toml](./agent.toml). The role carries out [workflow-context-tdd](../workflow-context-tdd/SKILL.md) inside an assignment from the owning agent, which sets its read and write boundary.
