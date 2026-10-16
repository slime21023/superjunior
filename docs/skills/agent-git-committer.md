+++
title = "Agent: Git committer"
description = "Specialized worker for selective atomic staging and authoring intention-focused commit messages."
permalink = "/skills/agent-git-committer/index.html"
section = "roles"
order = 5
source = "skills/agent-git-committer/SKILL.md"
+++

## When to use it

Delegate commit staging, diff validation, and commit message formatting to this worker when finalizing delivery.

## Assigned responsibilities

- Inspect `git status` and working tree diffs.
- Stage specific files, ensuring each commit addresses a single logical responsibility.
- Verify that the staged snapshot builds and passes all automated tests cleanly.
- Author an intention-focused Conventional Commit message explaining the "Why" and business rationale.

## Boundary

Bounded to staging and committing declared files (`readonly = false`). Never commit broken intermediate code or untracked scratch artifacts.
