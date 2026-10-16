---
name: principles-function-control-flow
description: Function & Control Flow Layer rules (Layer 2). Apply when writing, refactoring, or reviewing functions and methods to enforce single level of abstraction (SLAP), command-query separation (CQS), concept extraction, and error elimination by design.
license: MIT
---

# Principles: Function & Control Flow Layer

The function and control flow layer ensures that code executes predictably, reads smoothly from top to bottom, and eliminates surprises through well-structured abstractions and boundary defenses.

---

## 1. Single Level of Abstraction Principle (SLAP)

A function should operate at exactly one level of conceptual abstraction:

<slap-rules>
  <orchestrator-tier>
    High-level orchestrators coordinate coarse-grained business steps. They read like a clean recipe or summary table, delegating low-level algorithmic details to helpers.
  </orchestrator-tier>
  <worker-tier>
    Low-level workers handle gritty mechanics (regex parsing, byte manipulation, socket connections). Never interleave business workflow with raw string concatenation, bitwise operations, or nested loops.
  </worker-tier>
</slap-rules>

```typescript
// Orchestrator: All calls are at the same high abstraction tier
async function onboardUser(request: OnboardingRequest): Promise<UserAccount> {
  const validatedData = validateOnboardingPayload(request);
  const account = await createAccountRecord(validatedData);
  await dispatchWelcomeEmail(account.email);
  await scheduleTrialExpiration(account.id);
  return account;
}
```

---

## 2. Extract by Independent Concept

<extraction-rules>
  <rule type="hide-complexity">
    Functions are boundaries of comprehension. Extract when a block of logic performs an independent algorithm, non-trivial calculation, or multi-step transformation.
  </rule>
  <rule type="avoid-shallow-indirection">
    Do not extract trivial 1-line or 2-line wrappers that merely pass arguments through without adding semantic clarity or hiding complexity. Every function must earn its existence by reducing cognitive load.
  </rule>
</extraction-rules>

---

## 3. Command-Query Separation (CQS)

Every method must either be a Command or a Query, never both:

<cqs-contract>
  <command>
    <purpose>Modifies system state or performs side-effects.</purpose>
    <return-value>Must return void, unit, or asynchronous completion status.</return-value>
    <side-effects>Permitted and intentional.</side-effects>
  </command>
  <query>
    <purpose>Answers a question or computes data.</purpose>
    <return-value>Returns computed payload or lookup result.</return-value>
    <side-effects>Strictly zero observable side-effects. Calling a query repeatedly must never alter system state.</side-effects>
  </query>
  <atomic-exception>
    Isolated concurrency primitives (queue.dequeue(), atomicGetAndSet()) where separation is physically impossible are permitted when explicitly documented.
  </atomic-exception>
</cqs-contract>

---

## 4. Eliminate Errors by Design

Rather than scattering defensive `null` checks and exception handlers everywhere, design data structures and return types that absorb boundary conditions naturally:

<error-elimination>
  <rule type="empty-collections-over-null">
    Always return empty arrays [], empty sets, or empty maps instead of null or undefined. Callers can iterate over empty collections without crashing.
    - Bad: function findActiveTokens(): Token[] | null
    - Good: function findActiveTokens(): Token[]
  </rule>
  <rule type="null-objects">
    For optional behaviors (loggers, metrics reporters), provide a no-op null object default so callers never need to write defensive null guards.
  </rule>
  <rule type="reserve-exceptions">
    Do not use exceptions for expected control flow (user not found in a lookup form, validation failure). Represent expected outcomes with typed result unions.
  </rule>
</error-elimination>

---

## Verification & Audit Checklist

<audit-checklist>
  <item check="slap">Does the orchestrating function maintain a uniform level of abstraction?</item>
  <item check="nesting">Are guard clauses used to return early, keeping nesting to at most 2 levels?</item>
  <item check="cqs">Are query functions strictly pure and free of side-effects?</item>
  <item check="collections">Do list-returning functions return empty collections [] instead of null?</item>
  <item check="exceptions">Are exceptions reserved exclusively for unrecoverable or unexpected infrastructure failures?</item>
</audit-checklist>
