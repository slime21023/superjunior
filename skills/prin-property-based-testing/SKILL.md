---
name: prin-property-based-testing
description: "Use generated inputs to test a property of parsers, transformations, ordering, or state transitions."
license: MIT
---

# prin-property-based-testing

## When to apply

Use generated inputs to test a property of parsers, transformations, ordering, or state transitions.

## Principles

Express a property independently of implementation details and choose a generator for its valid input domain. Include inputs likely to stress boundaries and make failures reproducible.

## Application notes

Use the project's available test tooling. Preserve the seed and replay path or minimized input the runner provides. Check that the property detects a known incorrect result and retain useful concrete regressions.

See the [worked example](references/examples.md). See the [source guidance](https://www.cs.utexas.edu/~hunt/FMCAD/fmcad11/papers/inv8.pdf).
