+++
title = "Function and control flow"
description = "Layer 2: one level of abstraction per function, meaningful extraction, command-query separation, and errors designed away."
permalink = "/skills/principles-function-control-flow/index.html"
section = "principles"
order = 3
source = "skills/principles-function-control-flow/SKILL.md"
+++

Layer 2 covers how a function reads and behaves. The goal is code that reads top to bottom like a summary and never surprises the caller.

## When to apply it

Use it when writing, refactoring, or reviewing functions and methods, especially long ones that mix business steps with low-level detail, or code full of null checks.

## The rules

**Keep each function at one level of abstraction.** A function that coordinates business steps should read like a recipe and delegate details such as parsing, byte handling, or string building to helpers. Mixing the two makes the reader switch context on every line.

```text
async function onboardUser(request) {
  const data = validateOnboardingPayload(request);
  const account = await createAccountRecord(data);
  await dispatchWelcomeEmail(account.email);
  await scheduleTrialExpiration(account.id);
  return account;
}
```

**Extract a function only for a real concept.** Pull out an independent algorithm, a non-trivial calculation, or a multi-step transformation. A one- or two-line wrapper that just passes arguments through adds a jump without reducing what the reader must understand.

**Separate commands from queries.** A command changes state and returns nothing, or only a completion status. A query returns data and has no observable side effects, so calling it twice is always safe. Concurrency primitives such as `queue.dequeue()` are the documented exception.

**Design errors away.** Return an empty collection instead of `null` so callers can loop without a guard. Give optional collaborators such as loggers a no-op default. Represent expected outcomes like "user not found" or a validation failure with typed results, not exceptions.

```text
before: function findActiveTokens(): Token[] | null
after:  function findActiveTokens(): Token[]
```

**Return early to keep nesting shallow.** Guard clauses keep nesting to at most two levels.

## Review checklist

- The coordinating function stays at one level of abstraction.
- Extracted functions hide real complexity, not one-line indirection.
- Guard clauses keep nesting to two levels or fewer.
- Queries have no side effects.
- List-returning functions return `[]`, not `null`.
- Exceptions are reserved for unexpected or unrecoverable failures.

## Related

- [Lexical and expression](/skills/principles-lexical-expression/), the layer below.
- [Module boundaries](/skills/principles-module-boundaries/), the layer above.
- [Four-layer design](/skills/principles-four-layer-design/) for the full framework.
