+++
title = "Agent: Code reviewer"
description = "A read-only subagent role that audits a diff against the requirements and the four design layers."
permalink = "/skills/agent-code-reviewer/index.html"
section = "roles"
order = 4
source = "skills/agent-code-reviewer/SKILL.md"
+++

## When to use it

Delegate review to this role when you want an independent look at a change before committing or opening a pull request, from a worker that did not write the code. To review your own diff in the current session, use [self-review](/skills/workflow-self-review/) directly.

## What to give the worker

Give it the diff, the requirements or Done Criteria, and the test results. It writes nothing, so it needs only a read boundary.

## What it does

1. Checks the diff against the acceptance criteria to confirm the change stayed in scope.
2. Runs the audit checklist from each of the four design layers: [lexical and expression](/skills/principles-lexical-expression/), [function and control flow](/skills/principles-function-control-flow/), [module boundaries](/skills/principles-module-boundaries/), and [architecture evolution](/skills/principles-architecture-evolution/).
3. Checks hygiene: no leftover debug logs, no dead code, and a fully passing test suite.

## What you get

A verdict of `pass` or `needs-change`, a list of material findings, and an assessment of hygiene and test coverage. Each finding gives the file and line, the principle it breaks, the concrete failure or risk, and a specific fix, so you can act on it without redoing the reasoning.

## Boundaries

The role is read-only: it never changes product code or tests, and the owner applies any fixes. It judges against the acceptance criteria, test validity, and the design principles, and does not block a change over personal style or minor formatting.

Definition: [agent.toml](/source/skills/agent-code-reviewer/agent.toml).
