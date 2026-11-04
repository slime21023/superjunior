+++
title = "Scope alignment"
description = "Identify the smallest complete change and the evidence that will show it is done."
section = "roles"
order = 1
permalink = "/skills/agent-scope-aligner/index.html"
source = "skills/agent-scope-aligner/SKILL.md"
+++

Use `agent-scope-aligner` before implementation when you need to understand the problem, affected code, or acceptance boundary. It investigates without modifying code.

## Provide the intended behavior

Describe the desired change, any known entry point, and what must stay unchanged. Include constraints that could affect compatibility, data, or verification.

```text
Use agent-scope-aligner before adding CSV export.
Export the currently filtered items and preserve the existing filtering behavior.
Identify affected callers, tests, and public interfaces.
Return a plan and observable Done Criteria without changing files.
```

The role traces relevant entry points, contracts, dependencies, and consumers before proposing a sequence. It proceeds with reasonable assumptions when safe and identifies ambiguities that materially change the scope.

## Use the result as an implementation brief

The result contains the problem and Done Criteria, affected components and tests, explicit exclusions, concrete risks, and a minimal implementation and verification plan. Assumptions, open decisions, and evidence gaps remain visible.

A useful Done Criterion describes an observable result, such as “an export contains exactly the items selected by the active filter.” A list of files to edit describes work, but does not establish success.

## Continue from the scope

Use [TDD implementation](/skills/agent-tdd-implementer/) for an agreed behavior. Use [senior mode](/skills/senior-mode/) when an unresolved design choice changes the plan. [Junior mode](/skills/junior-mode/) coordinates both when you want the full change delivered.
