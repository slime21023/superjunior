---
name: prin-code-readability
description: "Assess or improve code whose intent, units, responsibilities, or side effects are hard to read."
license: MIT
---

# prin-code-readability

## When to apply

Assess or improve code whose intent, units, responsibilities, or side effects are hard to read.

## Principles

Make names express domain intent and units at the call site. Keep responsibility with the component that owns the behavior. Give an abstraction a concrete purpose such as hiding a detail likely to change.

## Application notes

Use existing project vocabulary and conventions. Identify the reading mistake a proposed change prevents. Preserve behavior when the assignment is to improve readability.

See the [worked example](references/examples.md).
