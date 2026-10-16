+++
title = "Scientific debug"
description = "Diagnose an exception or failing test from evidence, reproduce it, and fix the root cause."
permalink = "/skills/workflow-scientific-debug/index.html"
section = "workflows"
order = 3
source = "skills/workflow-scientific-debug/SKILL.md"
+++

## When to use it

Use it when an exception, a failing test, or unexpected behavior appears. In [junior mode](/skills/junior-mode/) it runs whenever a defect shows up during implementation, and it is where the defect route starts.

## What it does

1. **Observe**: read the error message, stack trace, and logs to find the exact exception, line, and runtime context. For an intermittent failure, first find the source of nondeterminism, such as time, randomness, ordering, concurrency, shared state, or network, and make it deterministic.
2. **Hypothesize**: form one or two specific hypotheses that the evidence could prove wrong. No production code changes without one.
3. **Reproduce**: write a minimal test that fails reliably, and only with the targeted error.
4. **Fix the root cause**: find where all callers meet and repair the broken rule there, instead of patching each caller.
5. **Verify**: confirm the reproduction test passes and the neighboring test suites still pass.

## What you get

A reproduction test, a fix at the root cause, and a passing suite, returned as `pass`. If the investigation shows the problem lies in the design rather than one bug, the outcome is `needs-change` so the design can be reconsidered.

## Boundaries

The agent edits only the reproduction test and the files that hold the root cause; debugging does not turn into an unrequested refactor. It makes no trial-and-error edits. If two fix attempts fail without producing new evidence, it stops and returns `needs-decision` with a structured question: the goal, expected versus actual behavior, each hypothesis tried and why it was ruled out, and the specific decision it needs from you.

## Example request

```text
Use workflow-scientific-debug. test_invoice_totals fails about one run in ten on CI with a rounding mismatch. Find the cause and fix it.
```
