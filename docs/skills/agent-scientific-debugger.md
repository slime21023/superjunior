+++
title = "Agent: Scientific debugger"
description = "A subagent role that reproduces a defect, finds its root cause, and fixes it where all callers meet."
permalink = "/skills/agent-scientific-debugger/index.html"
section = "roles"
order = 3
source = "skills/agent-scientific-debugger/SKILL.md"
+++

## When to use it

Delegate a defect to this role when an exception, failing test, or regression needs focused investigation away from the main task. For debugging in the current session, use [scientific debug](/skills/workflow-scientific-debug/) directly.

## What to give the worker

Give it the failing test or the exception logs and stack trace, the code it may read, and the files it may change. Its writes are limited to the minimal reproduction test and the source files at the root cause.

## What it does

1. Reads the logs and stack trace to find the exact line and state where the contract breaks.
2. Forms one or two hypotheses that a test could prove wrong.
3. Writes a minimal reproduction test or script that fails the same way the real failure does.
4. Fixes the cause at the point every caller passes through, rather than patching each caller.
5. Confirms the reproduction passes and the neighboring module tests still pass.

## What you get

A debugging report with the root cause and the contract it broke, the reproduction command and its failing output, where the fix went and why, and the passing results afterwards.

## Boundaries

Every edit tests a hypothesis; the role does not make random trial-and-error changes. If two hypotheses and fix attempts in a row fail without teaching anything new, it stops editing and reports the goal, expected versus actual behavior, and the hypotheses it tried, so the owner can decide what to do next.

Definition: [agent.toml](/source/skills/agent-scientific-debugger/agent.toml).
