+++
title = "Explain current behavior"
navTitle = "How code works"
description = "Trace execution, data, and side effects through the code that exists today."
section = "senior"
order = 0
permalink = "/skills/how-works/index.html"
source = "skills/how-works/SKILL.md"
+++

Use `how-works` to understand an execution path or a system behavior. It reads the relevant source and context without modifying code, tests, configuration, or documentation.

## Name the behavior you want to follow

A useful starting point is a symbol, endpoint, command, or observed result. Include the boundary you care about so the explanation stays focused.

```text
Use how-works to explain how a saved filter reaches the query layer.
Start at the HTTP handler and follow the empty-tag case.
Identify validation, state changes, and failure paths.
Do not change files.
```

The skill follows entry points, callers, dependencies, data flow, and state transitions. It distinguishes asynchronous waiting from actual blocking or concurrency guarantees and ties claims to source locations or observed behavior.

## Read the explanation

The response gives a behavior summary and scope, then the entry point, key flow, state and side effects, and relevant failure paths. Evidence, assumptions, and unknowns should be distinguishable.

A source trace shows what the code does. It does not establish why the original author chose that design. Use [why](/skills/why/) when the question is historical.

## Extend the question deliberately

Ask for a diagram if it would clarify the flow. For a redesign or a decision record, use [senior mode](/skills/senior-mode/) or [architecture discussion](/skills/architecture-discuss/). This skill's own boundary remains read-only.
