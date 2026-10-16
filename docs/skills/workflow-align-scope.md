+++
title = "Align scope"
description = "Agree on the problem, the finish line, and the affected files before any code changes."
permalink = "/skills/workflow-align-scope/index.html"
section = "workflows"
order = 1
source = "skills/workflow-align-scope/SKILL.md"
+++

## When to use it

Use it before changing code for a feature, fix, or refactor, so you and the agent agree on what is being solved before work starts. It is the first phase of [junior mode's](/skills/junior-mode/) full route, and you can also run it on its own when you plan to write the code yourself.

## What it does

1. States the problem in one or two plain sentences.
2. Sets two or three concrete Done Criteria that can be checked automatically.
3. Maps the blast radius in three tiers: the files that change directly, the callers, consumers, shared types, and test suites that could be affected, and the nearby code that stays off-limits.
4. Orders the work: types and contracts first, then core logic, then the commands that verify it.
5. Stops and asks if anything is still ambiguous.

Scope is described in concrete terms, such as files, interfaces, and data structures, not goals like "improve maintainability". The agent writes no more than about 50 lines of code before the blast radius is confirmed, so early code does not lock in a guess.

## What you get

A scope card with the problem statement, the Done Criteria as a checklist, the direct, ripple, and untouched files, and the execution path ending in the test command to run. The outcome is `pass` when the scope is clear and the plan is ready for [context TDD](/skills/workflow-context-tdd/).

## Boundaries

When a business rule, contract, or dependency can be read more than one way, the agent does not pick one silently. It returns `needs-decision` with targeted multiple-choice questions and waits for your answer. Files marked untouched stay out of the plan, even when a nearby improvement is tempting.

## Example request

```text
Use workflow-align-scope. We need CSV export on the reports page. Give me the scope card before writing any code.
```
