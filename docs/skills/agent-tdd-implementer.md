+++
title = "Agent: TDD implementer"
description = "A subagent role that implements one agreed slice test-first inside the files it is assigned."
permalink = "/skills/agent-tdd-implementer/index.html"
section = "roles"
order = 2
source = "skills/agent-tdd-implementer/SKILL.md"
+++

## When to use it

Delegate an implementation slice to this role once the scope is agreed: the contracts and Done Criteria are known and you can say exactly which files may change. For test-first work in the current session, use [context-first TDD](/skills/workflow-context-tdd/) directly.

## What to give the worker

Give it the aligned scope, the contracts to satisfy, the test targets, and the write boundary: the files in the direct modification scope. It may also edit the tests that belong to those files, and nothing else.

## What it does

1. Lists test specs across three groups: the happy path, boundary conditions such as empty collections, and error cases.
2. Writes the narrowest failing test and confirms it fails because the behavior is missing, not because of a syntax or environment error.
3. Writes the smallest production change that makes it pass.
4. Refactors while the tests stay green.
5. Runs the tests of neighboring modules to confirm nothing else broke.

## What you get

A delivery report with the test specs it implemented, the failing command and error before the change, the passing output including neighboring suites, and the list of changed files with an explanation of the change.

## Boundaries

It never writes production code before seeing a failing test, and never weakens, comments out, or deletes an existing assertion to get green. Unrelated refactoring and speculative features are left for a separate change. If two edits in a row fail to make the test pass, or the fix breaks other tests, it stops and rechecks its assumptions rather than continuing by trial and error.

Definition: [agent.toml](/source/skills/agent-tdd-implementer/agent.toml).
