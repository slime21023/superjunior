---
name: principles-lexical-expression
description: Use when naming code or reviewing comments and vocabulary for clarity.
license: MIT
---

# Principles: Lexical & Expression Layer

Make intent, units, and important constraints clear to readers.

- Choose names that describe their purpose and observable behavior. Include units when the type or context does not make them clear, such as `retryIntervalMs`.
- Follow the project's established vocabulary; distinguish concepts when their behavior differs instead of imposing a new universal verb list.
- Let code explain mechanics. Comment non-obvious invariants, external constraints, trade-offs, and known limits when the code cannot explain them.

## Review prompts

- Could a name, unit, or side effect mislead a reader?
- Does a necessary comment explain information the code cannot readily convey?