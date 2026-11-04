+++
title = "Code review"
description = "Assess a change against its requirements and report findings that someone can act on."
section = "roles"
order = 4
permalink = "/skills/agent-code-reviewer/index.html"
source = "skills/agent-code-reviewer/SKILL.md"
+++

Use `agent-code-reviewer` for a diff, staged changes, or a pull request. The role inspects code without modifying files or executing code. Its verdict is a static assessment, not proof that tests ran.

## Supply the comparison

Identify the change to review and the requirements it should satisfy. Include relevant acceptance criteria and available verification results.

```text
Use agent-code-reviewer on the current diff.
An empty tag selection must return all items, and selected tags must still filter.
Check affected callers and state transitions.
Return findings only; do not modify files or run the code.
```

The reviewer checks functional behavior, edge cases, error handling, dependency boundaries, and whether the change stays within scope. Findings should explain a concrete impact and a minimal correction. Unchanged legacy code is relevant when the current diff causes a regression in it.

## Read the verdict and findings

The overall verdict is `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. Each finding identifies a file location, severity, issue and impact, and a proposed fix.

The current output uses `BLOCKER`, `SUGGESTION`, and `NIT` for finding severity. The principles also describe a P0/P1/P2 priority hierarchy, but do not define a complete mapping between those vocabularies. Read the stated impact and blocking rationale; do not infer a mapping from the labels alone.

Minor preferences should not block the change. An approval still needs to be considered alongside requirements and verification evidence.

## Act on the review

Resolve blocking findings and rerun checks affected by the correction. In [junior mode](/skills/junior-mode/#check-the-handoff), `REQUEST_CHANGES` becomes a workflow need for changes; `COMMENT` findings are assessed individually.

A standalone review returns its own verdict and findings. It does not have to produce junior mode's workflow status or group findings into design-layer headings.
