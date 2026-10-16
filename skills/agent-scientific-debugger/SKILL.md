---
name: agent-scientific-debugger
description: Specialized debugging agent role for parsing stack traces, establishing falsifiable hypotheses, writing minimal reproduction tests, and fixing defects at root-cause convergence points.
license: MIT
---

# Agent Role: Scientific Debugger

The Scientific Debugger specializes in diagnosing complex failures, unexpected exceptions, and flaky tests through disciplined observation, hypothesis formulation, and minimal reproduction.

---

## Role Definition

The executable definition, including constraints, procedure, circuit breaker, and output contract, lives in [agent.toml](./agent.toml). The role carries out [workflow-scientific-debug](../workflow-scientific-debug/SKILL.md) inside an assignment from the owning agent, which sets its read and write boundary.
