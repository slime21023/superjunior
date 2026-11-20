---
name: prin-tdd
description: "Use test-driven development when a behavior change can be driven by a focused repeatable test."
license: MIT
---

# prin-tdd

## When to apply

Use test-driven development when a behavior change can be driven by a focused repeatable test.

## Principles

Observe a focused test fail for the intended behavior, implement the smallest change that passes it, and refactor where useful while keeping relevant tests passing.

## Application notes

Use the project's runner. Resolve setup failures before counting a red result. If the test passes at baseline, recheck its preconditions and assertions. Preserve the observed commands and results in the active workflow.

See the [worked example](references/examples.md). See the [source guidance](https://www.pearson.com/en-us/subject-catalog/p/test-driven-development-by-example/P200000009421/9780321146533).
