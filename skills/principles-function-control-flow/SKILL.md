---
name: principles-function-control-flow
description: Use when writing or reviewing functions, control flow, return values, and side effects.
license: MIT
---

# Principles: Function & Control Flow Layer

Keep flow understandable and make results and side effects match callers' expectations.

- Extract a function when it names a useful concept or hides complexity; avoid indirection that makes the flow harder to follow. Use abstraction levels and guard clauses where they improve readability, not as fixed limits.
- Make side effects clear. Queries should generally avoid surprising state changes; a command may return useful data, such as the ID of a record it created.
- Distinguish an empty result, absence, and failure when they have different meanings. An empty collection can represent a successful query with no matches, not a failed query. Validate inputs at boundaries and handle errors according to the contract.

## Review prompts

- Can a reader follow the flow without unnecessary jumps or nesting?
- Can the caller distinguish relevant outcomes and anticipate side effects?