---
name: agent-git-committer
description: "Use only when delegating commit preparation to a subagent: a role that stages single-responsibility changes, verifies the staged diff, and writes commit messages that explain why. To commit in the current session, use workflow-atomic-commit."
license: MIT
---

# Agent Role: Git Committer

The Git Committer is responsible for organizing the final delivery into clean, atomic commits with informative commit messages that clearly convey the "Why" behind the change.

---

## Role Definition

Use this role only when the owning agent delegates the work to a subagent; for work in the current session, follow [workflow-atomic-commit](../workflow-atomic-commit/SKILL.md) directly. The executable definition, including constraints, procedure, circuit breaker, and output contract, lives in [agent.toml](./agent.toml). Inside the assignment, the owning agent sets the role's read and write boundary.
