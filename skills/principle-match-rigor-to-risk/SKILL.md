---
name: principle-match-rigor-to-risk
description: Choose review and verification strength according to a software change's blast radius, uncertainty, reversibility, and failure consequences. Use when deciding which checks are necessary or whether available evidence supports delivery.
---

# Match Rigor to Risk

Spend verification effort where failure would matter, while keeping the checks reliable.

## Apply

- Identify the material risks: affected callers or users, persistent data, access control, external integrations, concurrency, and uncertainty in the expected behavior.
- Consider whether a failed change can be safely reversed and whether recovery would also restore its side effects.
- Choose the smallest set of checks that covers the acceptance conditions and those risks. Reuse existing tests and verification paths.
- A low-impact change may need direct inspection and a focused check. Changes to shared behavior, permissions, or persistent data need evidence for the relevant failure and integration paths.
- Arrange independent review where the consequences or uncertainty require it. Do not substitute an unavailable required check with a weaker claim of confidence.
- If necessary evidence cannot be obtained, state the gap and its consequence. Use an authorized alternative when it establishes the same claim.

## Evidence

Briefly connect the main risks to the checks selected, their results, and any remaining gaps. An elaborate numeric risk score is unnecessary.

## Boundaries

Setup cost can change the verification method, but does not remove an explicitly required condition or a necessary safety measure. Avoid ritual checks that cannot detect a meaningful failure.
