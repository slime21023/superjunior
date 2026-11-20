---
name: prin-refactoring
description: "Improve the internal structure of existing code while preserving observable behavior."
license: MIT
---

# prin-refactoring

## When to apply

Improve the internal structure of existing code while preserving observable behavior.

## Principles

Identify the behavior callers rely on before editing. Use small transformations that preserve that behavior. Run relevant checks after meaningful steps.

## Application notes

Add narrowly scoped characterization evidence when existing checks cannot detect an important regression. Follow the project's established structure and keep changes aligned with the requested scope.

See the [worked example](references/examples.md). See the [source guidance](https://martinfowler.com/books/refactoring.html).
