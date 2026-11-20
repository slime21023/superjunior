---
name: prin-semantic-versioning
description: "Assess a version increment for a project that declares a public contract and uses Semantic Versioning."
license: MIT
---

# prin-semantic-versioning

## When to apply

Assess a version increment for a project that declares a public contract and uses Semantic Versioning.

## Principles

Compare the candidate with the released public contract. Backward-compatible fixes, backward-compatible functionality, and incompatible changes normally map to patch, minor, and major increments respectively for a stable API.

## Application notes

Inspect the project's initial-development and prerelease policies. Account for deprecations and identify the specific changed contract that supports the recommendation. Run release actions only within the authorized task.

See the [worked example](references/examples.md). See the [source guidance](https://semver.org/).
