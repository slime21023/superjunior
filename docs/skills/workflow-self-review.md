+++
title = "Self review"
description = "Check a finished diff against the four-layer design principles and basic hygiene before it is committed."
permalink = "/skills/workflow-self-review/index.html"
section = "workflows"
order = 4
source = "skills/workflow-self-review/SKILL.md"
+++

## When to use it

Use it before committing, opening a pull request, or handing off code. It is the review phase of [junior mode](/skills/junior-mode/), and it works on its own for any diff you want checked.

## What it does

The agent reviews the diff one layer at a time, using the checklist at the end of each principles skill:

1. [Lexical and expression](/skills/principles-lexical-expression/): names, units, comments, and vocabulary.
2. [Function and control flow](/skills/principles-function-control-flow/): one level of abstraction per function, commands kept apart from queries, and error cases removed by design.
3. [Module boundaries](/skills/principles-module-boundaries/): deep modules with small interfaces and hidden internals.
4. [Architecture and evolution](/skills/principles-architecture-evolution/): dependency direction, no cycles, and folders organized by domain.

Every unchecked item becomes a finding. The agent then checks hygiene: temporary logs, debugger statements, and scratch comments are gone, the test suite passes, and every changed line traces back to the agreed scope.

## What you get

Either `pass`, meaning the diff meets all four layers with no open issues and is ready for [atomic commit](/skills/workflow-atomic-commit/), or `needs-change` with a list of concrete corrections, such as a misleading name, a leaking boundary, or a stray debug line.

## Boundaries

Self review reports findings; it does not commit. The standard comes from the [four-layer design principles](/skills/principles-four-layer-design/), so read those pages to see exactly what is checked.

## Example request

```text
Use workflow-self-review on my staged changes before I open the pull request.
```
