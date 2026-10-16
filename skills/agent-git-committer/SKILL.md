---
name: agent-git-committer
description: Specialized version control agent role for staging files with single responsibility, verifying clean staging diffs, and authoring intention-focused commit messages.
license: MIT
---

# Agent Role: Git Committer

The Git Committer is responsible for organizing the final delivery into clean, atomic commits with informative commit messages that clearly convey the "Why" behind the change.

---

## Role Definition

The executable definition, including constraints, procedure, circuit breaker, and output contract, lives in [agent.toml](./agent.toml). The role carries out [workflow-atomic-commit](../workflow-atomic-commit/SKILL.md) inside an assignment from the owning agent, which sets its read and write boundary.
