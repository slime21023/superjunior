---
name: principles-lexical-expression
description: Lexical & Expression Layer rules (Layer 1). Apply when naming variables, functions, and types, writing comments, or unifying domain terms to ensure self-explanatory, intuitive code without ambiguity.
license: MIT
---

# Principles: Lexical & Expression Layer

The lexical and expression layer establishes the immediate vocabulary of the software. When naming is precise and domain vocabulary is consistent, code reads like clear technical prose, minimizing cognitive load for readers and reviewers.

---

## 1. Precise Naming

Identifiers must clearly reflect intent, responsibility boundaries, and physical units:

<naming-constraints>
  Numerical variables representing time, size, duration, or rate include explicit physical units: write `timeoutMs = 5000`, `maxPayloadBytes = 1024`, `retryDelaySec = 3`, not `timeout = 5000` or `fileSize = 1024`. Avoid redundant type prefixes or suffixes (userList, dataObj); name entities by their operational meaning (activeSubscribers, pendingInvoices). A function name advertises exactly what it touches: if validateUser() also touches lastLoginAt, the name violates boundary precision.
</naming-constraints>

---

## 2. Division of Labor: Code vs. Comments

<comment-rules>
  Write idiomatic, self-describing code that makes mechanics obvious, and never write a comment that merely translates code into English, such as `// Increment counter by 1` above `i++;`. Reserve comments for non-obvious business invariants, external quirks, mathematical foundations, or performance trade-offs. When deliberately taking a simpler path with a known ceiling, document the boundary condition and upgrade trigger directly in code.
</comment-rules>

```typescript
// Why: Third-party payment gateway requires idempotency key to be formatted as UUID v4
// rather than our internal ULID; fallback to v4 generator for this provider.
const idempotencyKey = formatAsUuidV4(internalTransactionId);
```

---

## 3. Domain Vocabulary Consistency

Maintain a strict project-wide ubiquitous language. Every distinct domain concept must be mapped to exactly one canonical verb or noun:

<domain-vocabulary>
  | Concept | Canonical verb | Forbidden synonyms | Usage rule |
  | :--- | :--- | :--- | :--- |
  | Network or remote read | fetch | get, retrieve, pull | Use fetch strictly for asynchronous I/O across network boundaries. |
  | Local or in-memory cache lookup | get | fetch, find, query | Use get for instant synchronous lookups from local maps, state, or memory. |
  | Database query with filters | find | search, lookup, scan | Use find for persistent store queries filtered by predicates. |
  | State persistence or storage | save | store, persist, write | Use save for operations that persist new or updated records. |
</domain-vocabulary>

---

## Verification & Audit Checklist

<audit-checklist>
  - [ ] Every duration, size, or count variable contains explicit units (Ms, Sec, Bytes).
  - [ ] No comments merely paraphrase the code lines underneath them.
  - [ ] Consequential trade-offs and non-obvious workarounds have concise Why comments.
  - [ ] CRUD verbs match the project established ubiquitous vocabulary.
</audit-checklist>
