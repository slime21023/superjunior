+++
name = "how-works"
description = "Use for \"how does X work\", architectural walkthroughs, and code placement / ownership / layering questions (\"where should this live\", \"which package owns this\", \"is this the right layer\"). Explains subsystem architecture, runtime flow, and developer mental models. (Use 'why' for business rationale/motivation)."

[subagents.explorer]
tier = "fast-scout"
readonly = true

[subagents.explainer]
tier = "deep-reasoning"
readonly = true
+++

# How: Subsystem & Architecture Walkthrough

Explore the codebase to explain runtime mechanics and architectural structure.

**Target Level:** Senior engineer onboarding onto a subsystem. Build a conceptual mental model of how components collaborate. **Avoid line-by-line annotated source code walkthroughs.**

## Step 1: Scope Assessment & Routing

Evaluate scope to prevent unnecessary fan-out. If ambiguous, state your working assumption and proceed immediately (the user can redirect).

| Path | Criteria | Execution Strategy |
| :--- | :--- | :--- |
| **Simple** | Single function/utility, isolated module, or localized logic flow (up to two files). | Skip explorers. Run a single-pass explainer and proceed to **Step 2b**. |
| **Complex** | Subsystem spanning multiple files/services, cross-cutting feature, or system-wide architecture. | Run parallel explorers followed by synthesis; start at **Step 2a**. |

*Rule: When in doubt, default to Simple.*

---

## Step 2a: Parallel Exploration (Complex Path)

Decompose the question into **2 to 4 orthogonal exploration angles** (e.g., *Entrypoint & Lifecycle*, *Core State & Data Pipeline*, *Dependencies & External Contracts*, *Error Boundaries & Edge Cases*).

Spawn all explorers in a **single tool call batch**:
- `subagent_type`: `generalPurpose`
- `model`: Role `how explorer`
- `readonly`: `true`
- `prompt`: Content of `references/explorer-prompt.md` with the assigned angle injected.

*Once all parallel tasks finish, proceed to **Step 3**.*

---

## Step 2b: Direct Explain (Simple Path)

Spawn a single Task subagent to explore and explain in one pass:
- `subagent_type`: `generalPurpose`
- `model`: Role `how explainer`
- `readonly`: `true`
- `prompt`: Content of `references/explainer-prompt.md` (omit the `explorer-findings` section).

*Proceed directly to **Step 4**.*

---

## Step 3: Synthesis (Complex Path Only)

Aggregate findings from all Step 2a explorers into a unified mental model.

Spawn one synthesis Task subagent:
- `subagent_type`: `generalPurpose`
- `model`: Role `how explainer` (Default: `claude-opus-5-5-high`)
- `readonly`: `true`
- `prompt`: Content of `references/explainer-prompt.md`, populating `explorer-findings` with the raw outputs from Step 2a.

---

## Step 4: Presentation & Quality Gate

Deliver the explainer's synthesis to the user.

- **Editing rule:** Apply light contextual edits for flow and conversational clarity; do not rewrite or flatten technical details.
- **Section structure:** Follow sections defined in `references/explainer-prompt.md` (drop sections that do not apply):
  1. `Overview`: High-level purpose and boundary.
  2. `Key Concepts`: Core primitives and domain vocabulary.
  3. `How It Works`: Primary runtime flow / sequence.
  4. `Where Things Live`: Directory layout, file ownership, and architectural layers.
  5. `Gotchas`: Non-obvious failure modes, race conditions, or tricky invariants.
- **Negative constraint:** Do not paste raw, multi-page code dumps. Use ASCII sequence diagrams, directory trees, or tiny snippets (five lines or fewer) only when they anchor a concept.
