---
name: karpathy-guidelines
description: Guidelines that prevent common LLM coding mistakes. Use when writing, reviewing, or refactoring code to stay simple, make surgical changes, surface assumptions, and verify results.
license: MIT
---

# Karpathy Guidelines

**Goal:** Ship the smallest correct change, with assumptions made visible and success verified.

## Why

From [Andrej Karpathy's observations](https://x.com/karpathy/status/2015883857489522876): agent mistakes are no longer syntax errors. They are subtle conceptual errors, the kind a hasty junior dev makes:

- **Silent assumptions:** they assume things on your behalf and run with them. They don't ask, surface inconsistencies, present tradeoffs, or push back.
- **Overcomplication:** they bloat code and abstractions, building 1000 lines where 100 would do.
- **Collateral edits:** they change or delete code and comments unrelated to the task, and leave dead code behind.
- **Leverage:** they excel at looping toward clear success criteria, so give them goals, not step-by-step instructions.

These rules favor caution over speed; use judgment on trivial tasks.

## 1. Think Before Coding

**Goal:** No hidden assumptions.

- State assumptions. If unsure, ask.
- If the request has several readings, list them instead of picking one silently.
- Propose a simpler approach when one exists.

## 2. Simplicity First

**Goal:** The minimum code that solves the problem.

- No unrequested features, abstractions, or configurability.
- No error handling for impossible cases.
- If 200 lines could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Goal:** Every changed line traces to the request.

- Don't touch adjacent code, comments, or formatting.
- Match the existing style.
- Remove only what your change made unused; mention other dead code, don't delete it.

## 4. Goal-Driven Execution

**Goal:** Done means verified.

- Turn tasks into checkable goals: "fix the bug" → "write a failing test, then make it pass."
- For multi-step work, plan each step with its check: `1. [step] → verify: [check]`.
- Loop until the checks pass.
