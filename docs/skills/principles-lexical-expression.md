+++
title = "Lexical and expression"
description = "Layer 1: precise names with units, comments that explain why, and one word per domain concept."
permalink = "/skills/principles-lexical-expression/index.html"
section = "principles"
order = 2
source = "skills/principles-lexical-expression/SKILL.md"
+++

Layer 1 covers the words in your code. When names are precise and vocabulary is consistent, a reader understands a line without opening anything else.

## When to apply it

Use it when naming variables, functions, and types, when writing or reviewing comments, and when a codebase uses several words for the same operation.

## The rules

**Put physical units in numeric names.** A bare `timeout` forces the reader to find where it is used to learn whether it means seconds or milliseconds.

```text
before: timeout = 5000
after:  timeoutMs = 5000
```

**Name things by what they mean, not their type.** `activeSubscribers` tells you more than `userList`, and `pendingInvoices` more than `dataObj`.

**Make function names match what they touch.** If `validateUser()` also updates `lastLoginAt`, the name hides a side effect. Rename it or split it.

**Let code show how; use comments for why.** A comment like `// Increment counter by 1` above `i++` adds nothing. Comments are for business invariants, third-party quirks, math, performance tradeoffs, and known limits of a deliberately simple solution, including when to upgrade it.

```text
// Why: the payment gateway requires a UUID v4 idempotency key, not our ULID.
const idempotencyKey = formatAsUuidV4(internalTransactionId);
```

**Use one word per concept across the project.** Mixing `getUser`, `fetchUser`, and `retrieveUser` makes readers wonder whether they differ. The skill suggests this vocabulary:

| Operation | Verb | Avoid |
| :--- | :--- | :--- |
| Read over the network | `fetch` | get, retrieve, pull |
| Instant local or in-memory lookup | `get` | fetch, find, query |
| Filtered database query | `find` | search, lookup, scan |
| Persist a new or updated record | `save` | store, persist, write |

## Review checklist

- Duration, size, and count variables include units such as `Ms`, `Sec`, or `Bytes`.
- No comment just restates the code below it.
- Non-obvious tradeoffs and workarounds have a short why comment.
- Data-access verbs match the project vocabulary.

## Related

- [Four-layer design](/skills/principles-four-layer-design/) for the full framework.
- [Function and control flow](/skills/principles-function-control-flow/), the next layer up.
