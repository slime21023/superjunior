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
  High-level orchestrators coordinate coarse-grained business steps; they read like a clean recipe or summary table and delegate low-level algorithmic details to helpers. Low-level workers handle gritty mechanics such as regex parsing, byte manipulation, and socket connections. Never interleave business workflow with raw string concatenation, bitwise operations, or nested loops.
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
  Functions are boundaries of comprehension. Extract when a block of logic performs an independent algorithm, non-trivial calculation, or multi-step transformation. Do not extract trivial 1-line or 2-line wrappers that merely pass arguments through without adding semantic clarity or hiding complexity; every function earns its existence by reducing cognitive load.
</extraction-rules>

---

## 3. Command-Query Separation (CQS)

Every method must either be a Command or a Query, never both:

<cqs-contract>
  | | Command | Query |
  | :--- | :--- | :--- |
  | Purpose | Modifies system state or performs side-effects. | Answers a question or computes data. |
  | Return value | Void, unit, or asynchronous completion status. | Computed payload or lookup result. |
  | Side effects | Permitted and intentional. | Zero observable side-effects; calling a query repeatedly never alters system state. |

  Isolated concurrency primitives (queue.dequeue(), atomicGetAndSet()), where separation is physically impossible, are permitted when explicitly documented.
</cqs-contract>

---

## 4. Eliminate Errors by Design

Rather than scattering defensive `null` checks and exception handlers everywhere, design data structures and return types that absorb boundary conditions naturally:

<error-elimination>
  Return empty arrays `[]`, empty sets, or empty maps instead of null or undefined, so callers can iterate without crashing: write `function findActiveTokens(): Token[]`, not `function findActiveTokens(): Token[] | null`. For optional behaviors such as loggers and metrics reporters, provide a no-op null object default so callers never write defensive null guards. Do not use exceptions for expected control flow (user not found in a lookup form, validation failure); represent expected outcomes with typed result unions.
</error-elimination>

---

## Verification & Audit Checklist

<audit-checklist>
  - [ ] Does the orchestrating function maintain a uniform level of abstraction?
  - [ ] Are guard clauses used to return early, keeping nesting to at most 2 levels?
  - [ ] Are query functions strictly pure and free of side-effects?
  - [ ] Do list-returning functions return empty collections [] instead of null?
  - [ ] Are exceptions reserved exclusively for unrecoverable or unexpected infrastructure failures?
</audit-checklist>
