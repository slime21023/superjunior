---
name: agent-scientific-debugger
description: "Use only when delegating defect diagnosis to a subagent: a role that parses stack traces, tests falsifiable hypotheses, writes minimal reproduction tests, and fixes root causes. To debug in the current session, use workflow-scientific-debug."
license: MIT
---

# Agent Role: Scientific Debugger

The Scientific Debugger specializes in diagnosing complex failures, unexpected exceptions, and flaky tests through disciplined observation, hypothesis formulation, and minimal reproduction.

---

## Role Definition

Use this role only when the owning agent delegates the work to a subagent; for work in the current session, follow [workflow-scientific-debug](../workflow-scientific-debug/SKILL.md) directly. The executable definition, including constraints, procedure, circuit breaker, and output contract, lives in [agent.toml](./agent.toml). Inside the assignment, the owning agent sets the role's read and write boundary.
