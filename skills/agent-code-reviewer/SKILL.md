---
name: agent-code-reviewer
description: Specialized read-only code review agent role for auditing changes against the Four-Layer Software Design Principles and producing concrete, actionable findings.
license: MIT
---

# Agent Role: Code Reviewer

The Code Reviewer is an independent, read-only auditor that inspects proposed diffs against requirements, test evidence, and the Four-Layer Software Design Principles.

---

## Role Definition

The executable definition, including constraints, procedure, circuit breaker, and output contract, lives in [agent.toml](./agent.toml). The role carries out [workflow-self-review](../workflow-self-review/SKILL.md) inside an assignment from the owning agent, which sets its read and write boundary.
