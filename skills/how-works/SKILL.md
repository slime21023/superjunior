---
name: how-works
description: "Use for questions about how code works, where a responsibility should live, which package owns something, or whether code sits in the right layer. Explains subsystem architecture, runtime flow, and developer mental models from inspected code; use why for historical rationale. Part of senior-mode."
license: MIT
---

# How: Subsystem & Architecture Walkthrough

Explore the codebase to explain runtime mechanics and architectural structure. Preserve repository contents while investigating.

Write for a senior engineer onboarding onto the subsystem: build a conceptual model of how components collaborate rather than a line-by-line walkthrough of the source.

## Step 1: Scope Assessment & Routing

Evaluate scope to prevent unnecessary fan-out. If ambiguous, state your working assumption and proceed immediately (the user can redirect).

| Path | Criteria | Execution Strategy |
| :--- | :--- | :--- |
| **Simple** | Single function/utility, isolated module, or localized logic flow (up to two files). | Explore and explain directly; proceed to **Step 2b**. |
| **Complex** | Subsystem spanning multiple files/services, cross-cutting feature, or system-wide architecture. | Consider bounded exploration at **Step 2a**, then synthesize in the owning agent. |

*Rule: When in doubt, default to Simple.*

## Step 2a: Bounded Exploration (Complex Path)

Identify separable angles such as *Entrypoint & Lifecycle*, *Core State & Data Pipeline*, *Dependencies & External Contracts*, and *Error Boundaries & Edge Cases*.

Delegate only when separate investigation materially helps and the host supports authorized delegation. Otherwise explore directly. Use the explorer role defined in [agent-scope-aligner](../agent-scope-aligner/agent.toml) and the host's configured model; keep assignments within the owner's concurrency and budget.

Build each assignment from [the explorer template](references/explorer-prompt.md). Supply the original question, assigned angle, source identity, readable scope, relevant constraints, and return conditions. Explorers preserve repository contents and return sourced findings; further delegation requires an explicit grant.

*Once the assigned investigations finish, proceed to **Step 3**.*

## Step 2b: Direct Explain (Simple Path)

Trace the relevant code and write the explanation yourself using [the synthesis guide](references/explainer-prompt.md). Omit the explorer-findings section when no exploration was delegated.

*Proceed directly to **Step 4**.*

## Step 3: Owner Synthesis (Complex Path Only)

Use [the synthesis guide](references/explainer-prompt.md) to combine your observations and any returned findings into a unified mental model.

Resolve material contradictions by checking the code. Preserve unanswered questions and confirm that combined findings concern the same source version. The owning agent performs synthesis directly.

## Step 4: Presentation & Quality Gate

Check that the explanation answers the original question and follows from the inspected code.

- **Editing rule:** Apply light contextual edits for flow and conversational clarity; do not flatten technical details.
- **Section structure:** Follow the synthesis guide (drop sections that do not apply):
  1. `Overview`: High-level purpose and boundary.
  2. `Key Concepts`: Core primitives and domain vocabulary.
  3. `How It Works`: Primary runtime flow / sequence.
  4. `Where Things Live`: Directory layout, file ownership, and architectural layers.
  5. `Gotchas`: Non-obvious failure modes, race conditions, or tricky invariants.
- **Code excerpts:** Do not paste multi-page code dumps. Use diagrams, directory trees, or tiny snippets (five lines or fewer) only when they anchor a concept.
