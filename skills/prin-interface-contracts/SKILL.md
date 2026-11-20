---
name: prin-interface-contracts
description: "Assess or change a boundary whose inputs, outputs, errors, or compatibility matter to callers."
license: MIT
---

# prin-interface-contracts

## When to apply

Assess or change a boundary whose inputs, outputs, errors, or compatibility matter to callers.

## Principles

Validate untrusted inputs at the boundary that owns the contract. Define successful outcomes, failures, and observable side effects in terms callers can distinguish.

## Application notes

Inspect callers and persisted representations before changing the contract. Preserve supported old inputs or make the migration explicit. Verify the changed contract through an affected entry point.

See the [worked example](references/examples.md).
