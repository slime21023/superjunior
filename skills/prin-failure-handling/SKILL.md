---
name: prin-failure-handling
description: "Reason about errors, retries, and partial completion in stateful work or external calls."
license: MIT
---

# prin-failure-handling

## When to apply

Reason about errors, retries, and partial completion in stateful work or external calls.

## Principles

Identify who observes and handles a failure and what state survives it. Distinguish a failed dependency from a valid empty result. Verify the state before retrying an operation with an uncertain outcome.

## Application notes

For applicable writes, decide whether atomic replacement, a transaction, or a stable operation ID fits the existing boundary. Check cleanup and replay at the point that owns the side effect.

See the [worked example](references/examples.md).
