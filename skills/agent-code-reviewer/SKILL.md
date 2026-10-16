---
name: agent-code-reviewer
description: "Use only when delegating an independent code review to a subagent: a read-only role that audits a diff against the Four-Layer Software Design Principles and returns actionable findings. To review in the current session, use workflow-self-review."
license: MIT
---

# Agent Role: Code Reviewer

The Code Reviewer is an independent, read-only auditor that inspects proposed diffs against requirements, test evidence, and the Four-Layer Software Design Principles.

---

## Role Definition

Use this role only when the owning agent delegates the work to a subagent; for work in the current session, follow [workflow-self-review](../workflow-self-review/SKILL.md) directly. The executable definition, including constraints, procedure, circuit breaker, and output contract, lives in [agent.toml](./agent.toml). Inside the assignment, the owning agent sets the role's read and write boundary.
