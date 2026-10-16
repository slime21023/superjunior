---
name: why
description: "Use to uncover why code is written the way it is: design rationale, historical intent, and architectural tradeoffs from Git history, code, and PRs. Leads with the verdict, separates verified facts from inferences, and asks the user when evidence runs out. Part of senior-mode."
license: MIT
---

# Why: Design Intent & Motivation Reconstruction

Reconstruct the engineering rationale, historical constraints, and tradeoffs behind target code.

State the core motivating cause in the first sentence. Keep documented evidence and reasoned deductions apart, and when historical evidence is missing or ambiguous, ask the user precise questions instead of inventing intent. Prefer local Git history, PR discussions, and source code; use external tools such as issue trackers or docs when they are available, and continue without them when they are not.

---

## Workflow

### Step 1: Code Anchoring
Isolate the code snippet, symbol, or pattern in question before investigating:
1. Note file path, line range, and primary symbols.
2. Run local Git archaeology to seed investigation context:
   - `git blame -L <start>,<end> <file>` to identify the introducing commits.
   - `git log --follow -p -n 5 -- <file>` to trace historical iterations and refactors.
   - Extract PR numbers and ticket references from commit logs (e.g., `(#1234)`, `JIRA-5678`).
   - If GitHub/GitLab CLI is available, fetch PR titles, descriptions, and linked review comments.

### Step 2: Evidence Gathering (Fan-Out or Direct)
Investigate through whichever tools are active (Git, file search, documentation, or optional MCP connections).

Categorize all gathered signals into three distinct buckets:
- **Documented Facts:** Direct statements in commit messages, PR descriptions, inline code comments, regression tests, or linked tickets.
- **Plausible Inferences:** Logical deductions derived from code structure, defensive checks (e.g., rate limits, null guards), or architectural patterns where explicit written rationale is absent.
- **Information Gaps:** Missing context that cannot be proven from repository artifacts alone (e.g., offline team decisions, historical incidents without postmortems).

*For complex investigations spanning multiple commits and architectural boundaries, spawn subagent(s) using `references/investigator-prompt.md`.*

### Step 3: Synthesis & Bottom-Line Verdict
Aggregate all findings using `references/synthesizer-prompt.md`.

**Synthesizer Rules:**
1. **Lead with the verdict:** Open sentence 1 with the direct reason this code exists in its current form.
2. **Isolate facts from deductions:** Maintain separate, labeled subsections for Hard Evidence vs. Engineering Inferences.
3. **Escalate unknowns:** If critical business context, external API limitations, or incident triggers remain unverifiable, prompt the user with targeted questions.

---

## Output Structure

The final output must follow this format:

### 1. Core Verdict
State the primary motivation and design goal in 1–2 direct sentences. Address what problem this code was created to solve and why this specific pattern was chosen.

### 2. Verified Facts
List only what is explicitly recorded in commit history, PR descriptions, code comments, or tickets:
- Commit hashes, authors, and dates of the introducing change.
- Direct quotes from PR summaries or review discussions detailing the motivating requirements.
- Existing tests that demonstrate the specific edge cases being guarded against.

### 3. Plausible Inferences
Detail deductions derived from code analysis, clearly marked as inferences:
- Why alternative patterns were likely avoided (tradeoffs in simplicity, performance, backward compatibility).
- Inherent defensive mechanisms (why specific thresholds, timeouts, or fallback logic were chosen).

### 4. Clarification Needed from You
*Omit this section only if documentary evidence is 100% complete.*
List targeted questions for the user regarding missing context (e.g., offline decisions, unlinked business requirements, undocumented downstream client constraints).

### 5. Change Guidance
If modifying this code:
- **Preserve:** Invariants, defenses, and edge-case handlings that must not be broken.
- **Safe to Change:** Outdated assumptions, dead constraints, or temporary workarounds that can now be modernized.