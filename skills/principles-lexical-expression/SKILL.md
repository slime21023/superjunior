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
  <rule type="physical-units">
    Numerical variables representing time, size, duration, or rate must include explicit physical units.
    - Bad: timeout = 5000, fileSize = 1024
    - Good: timeoutMs = 5000, maxPayloadBytes = 1024, retryDelaySec = 3
  </rule>
  <rule type="intent-over-type">
    Avoid redundant type prefixes or suffixes (userList, dataObj). Name entities by their operational meaning (activeSubscribers, pendingInvoices).
  </rule>
  <rule type="boundary-precision">
    A function name must strictly advertise what it actually touches. If validateUser() also touches lastLoginAt, it violates boundary precision.
  </rule>
</naming-constraints>

---

## 2. Division of Labor: Code vs. Comments

<comment-rules>
  <rule type="code-explains-how">
    Write idiomatic, self-describing code that makes mechanics obvious. Never write a comment that merely translates code into English.
    - Forbidden: // Increment counter by 1; i++;
  </rule>
  <rule type="comments-explain-why">
    Reserve comments for non-obvious business invariants, external quirks, mathematical foundations, or performance trade-offs.
  </rule>
  <rule type="document-deferred-complexity">
    When deliberately taking a simpler path with a known ceiling, document the boundary condition and upgrade trigger directly in code.
  </rule>
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
  <term concept="Network or remote read" verb="fetch">
    <forbidden-synonyms>get, retrieve, pull</forbidden-synonyms>
    <usage-rule>Use fetch strictly for asynchronous I/O across network boundaries.</usage-rule>
  </term>
  <term concept="Local or in-memory cache lookup" verb="get">
    <forbidden-synonyms>fetch, find, query</forbidden-synonyms>
    <usage-rule>Use get for instant synchronous lookups from local maps, state, or memory.</usage-rule>
  </term>
  <term concept="Database query with filters" verb="find">
    <forbidden-synonyms>search, lookup, scan</forbidden-synonyms>
    <usage-rule>Use find for persistent store queries filtered by predicates.</usage-rule>
  </term>
  <term concept="State persistence or storage" verb="save">
    <forbidden-synonyms>store, persist, write</forbidden-synonyms>
    <usage-rule>Use save for operations that persist new or updated records.</usage-rule>
  </term>
</domain-vocabulary>

---

## Verification & Audit Checklist

<audit-checklist>
  <item check="units">Every duration, size, or count variable contains explicit units (Ms, Sec, Bytes).</item>
  <item check="comments">No comments merely paraphrase the code lines underneath them.</item>
  <item check="trade-offs">Consequential trade-offs and non-obvious workarounds have concise Why comments.</item>
  <item check="vocabulary">CRUD verbs match the project established ubiquitous vocabulary.</item>
</audit-checklist>
