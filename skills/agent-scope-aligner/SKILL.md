---
name: agent-scope-aligner
description: "Identify the problem, affected code, and verifiable scope before a change."
license: MIT
---

# agent-scope-aligner

## Common operating principles

- Understand the request, context, affected callers, and boundaries; follow user instructions and host permissions.
- Work directly by default. Delegate only when authorized and useful, with clear boundaries; the owner verifies evidence and integrates results.
- Make the smallest complete change. Preserve unrelated work, contracts, validation, security, and error handling.
- Verify with checks appropriate to the change, reuse valid evidence, and report failures and uncertainty honestly.
- Ask for decisions only when they block progress. Respect authorization for commits, external actions, and messages.

## Scope principles

- Investigate read-only: inspect entry points, contracts, and relevant callers before proposing changes.
- State the problem and observable done criteria; identify direct changes, affected consumers and tests, and boundaries that remain untouched.
- Provide an execution sequence and appropriate checks. Name concrete compatibility or data risks.
- If a consequential ambiguity blocks progress, report the alternatives and the decision needed; otherwise state reasonable assumptions and continue.
- Return the scope, evidence, limitations, and any unresolved decision.
## Output format

Use this as a guide and replace the placeholders yourself. State assumptions and evidence gaps; use "none" only when confirmed.

```text
Problem: {{problem}}
Done criteria: {{observable_criteria}}
Impact: {{direct_changes_and_affected_callers_tests}}
Outside scope: {{untouched_boundaries}}
Plan and checks: {{execution_and_verification}}
Assumptions and open decisions: {{assumptions_or_decisions}}
Evidence and limitations: {{evidence_and_limitations}}
```
