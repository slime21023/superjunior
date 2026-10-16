+++
title = "Agent: Scope aligner"
description = "A read-only subagent role that investigates the code and returns the scope for a change before anyone edits it."
permalink = "/skills/agent-scope-aligner/index.html"
section = "roles"
order = 1
source = "skills/agent-scope-aligner/SKILL.md"
+++

## When to use it

Delegate scope alignment to this role when the investigation is large: many callers to trace, unfamiliar modules, or enough context that it would crowd the main conversation. For scope alignment in the current session, use [align scope](/skills/workflow-align-scope/) directly.

## What to give the worker

Give it the user's request or ticket, the entry point to start from, the code it may read, and the snapshot to inspect. It writes nothing, so the assignment only needs a read boundary.

## What it does

1. Explores the entry points, the existing data models, and the callers upstream and downstream.
2. States the problem in one or two plain sentences and sets two or three Done Criteria you can check.
3. Sorts the affected code into direct changes, ripple effects, and untouched areas.
4. Orders the plan: types and contracts first, then core logic, then the commands that verify it.

## What you get

A Markdown report with the problem statement, the Done Criteria, the blast radius matrix, and the ordered plan with its verification commands. Findings name concrete call sites, coupling points, or contract breaks rather than vague goals like "improve maintainability".

## Boundaries

The role is read-only: it never creates, edits, or deletes files, and it writes at most 50 lines of implementation code before the blast radius is confirmed. Unrelated files stay out of the plan. If it finds two or more conflicting readings of the request, or a database or API contract that is not defined, it stops and returns a question instead of guessing.

Definition: [agent.toml](/source/skills/agent-scope-aligner/agent.toml).
