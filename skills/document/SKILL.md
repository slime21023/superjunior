---
name: document
description: "Create or update documentation for system behavior, decisions, or operating procedures."
license: MIT
---

# document

## Overview

Create or revise documentation that helps its intended readers understand a system, follow a procedure, or trace a decision.

- Organize content around what the reader needs to understand or do.
- Support key claims with sources and make their applicability clear.
- Distinguish current behavior from confirmed decisions awaiting implementation and open proposals.

## Input

The intended audience, requested artifact, and source material or confirmed decisions.

## Execution

Identify what readers need to understand or do. Follow the project's documentation conventions. When revising an existing document, update the maintained copy, preserve unrelated content, and link to authoritative sources for rules maintained elsewhere.

Verify key claims against code, tests, configuration, or recorded decisions. Cite sources near the claims they support and identify version or environment limits. Distinguish current behavior, confirmed decisions awaiting implementation, and proposals. When sources conflict, state the discrepancy and its effect on the documented guidance.

For procedures, give the required prerequisites, reproducible steps, observable success criteria, and recovery guidance where needed. Check affected links and examples. Record whether commands or steps were executed or checked by inspection.

## Completion

Write new documentation files under `_artifacts/document/` at the project root. Create the directory as needed and link to the file in the final reply.

Use the project format when available. Otherwise choose the outline that fits the reader's task and omit empty sections.

### System behavior

1. **Scope** — Identify the feature, entry point, and relevant version or environment.
2. **Behavior** — Describe the conditions and observable results.
3. **Exceptions and limits** — Record conditions that materially change the result.
4. **Sources** — Link to the code, configuration, tests, or requirements supporting key claims. Place claim-specific references next to those claims.

### Decision record

1. **Context and constraints** — State the problem and limits affecting the decision.
2. **Decision and status** — Record the confirmed choice and its source. State the implementation status separately.
3. **Options and trade-offs** — Explain material differences and the rationale for the choice.
4. **Impact and follow-up** — Identify affected behavior or interfaces and any remaining implementation, verification, or decisions.

### Operating procedure

1. **Purpose and prerequisites** — State the outcome and required versions, permissions, tools, or data.
2. **Steps** — Give actions, commands, or interface entry points in order. Include expected intermediate results when helpful.
3. **Success criteria** — Explain how to check the final state or artifact.
4. **Failure handling** — Name recognizable symptoms, recovery steps, and when to hand off.

In the final reply, link to the document, summarize what changed, and report what was checked and any material verification limits. See [worked examples](references/examples.md) for a decision record and an operating procedure.
