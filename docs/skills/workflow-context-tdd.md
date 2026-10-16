+++
title = "Context TDD"
description = "Build a feature or fix a reported defect test-first, after learning how the surrounding code works."
permalink = "/skills/workflow-context-tdd/index.html"
section = "workflows"
order = 2
source = "skills/workflow-context-tdd/SKILL.md"
+++

## When to use it

Use it when implementing a feature or fixing a reported defect and you want tests to describe the behavior before the code changes. It is the second phase of [junior mode's](/skills/junior-mode/) full route.

## What it does

The agent first reads the existing contracts, data models, and conventions around the change. It then lists the tests it needs in three groups: the normal successful flow, boundary cases such as empty collections, zero values, size limits, and repeated runs, and error cases such as malformed input, missing authorization, or timeouts.

For each test it follows Red-Green-Refactor:

1. **Red**: write the narrowest failing test and confirm it fails for the intended reason, not a syntax or environment error. For a reported defect, it first states the expected behavior, the actual behavior, and the smallest input that reproduces it.
2. **Green**: write the simplest code that passes.
3. **Refactor**: clean up names and structure while the tests stay green.

Tests check public inputs and outputs only. Mocks are used only at external boundaries such as network, database, or message brokers, never for your own domain code.

Some defects are impractical to test in the suite: they would need heavy third-party mocks, live network access, production credentials, state that cannot be reproduced, or setup that costs more than the fix. In those cases the agent uses the narrowest reliable check instead: a standalone reproduction script, then an exact CLI command, then a focused log or snapshot observation. It records why the suite test was skipped.

## What you get

A short proof of the change: the expected behavior, the failing output before the change, the change itself (and the root cause for a defect), the passing output for the new check and the neighboring tests, and a note when a fallback check replaced a suite test. The outcome is `pass` when all planned tests pass with no regressions, or a fallback check verifies the change.

## Boundaries

The agent never loosens thresholds, comments out assertions, or deletes tests to get a green run, and it never modifies shared global fixtures. After two failed attempts, or when adjacent tests break, it stops and rethinks instead of trying more edits; that returns `needs-change`. If neither a test nor a fallback check can reliably verify the change, or the test environment is broken or flaky, the outcome is `unverified`.

## Example request

```text
Use workflow-context-tdd. Orders with an empty cart should be rejected with a validation error instead of creating a zero-total invoice.
```
