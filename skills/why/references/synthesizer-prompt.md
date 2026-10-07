# Synthesizer Prompt Template

Synthesize the gathered investigation findings into a definitive, structured explanation of design intent and motivation.

## Inputs

- Original Question: {QUESTION}
- Code Anchor: {CODE_ANCHOR}
- Investigation Findings: {INVESTIGATION_FINDINGS}

## Synthesis Instructions

1. **Lead with the Answer:**
   Sentence 1 MUST deliver the root cause and core intent directly. Do not start with pleasantries, background recaps, or process descriptions (avoid "Based on the git log..." or "After reviewing..."). State the core architectural decision immediately.

2. **Maintain Strict Epistemic Boundaries:**
   - Keep documented facts and logical inferences in completely separate sections.
   - Never present an inference as an established fact. Use precise language: "Commit abc1234 states X" vs. "The code structure suggests an intention to prevent Y".

3. **Engage the User on Missing Context:**
   If the evidence trail runs cold (e.g., a "fix edge case" commit without explanation, an arbitrary hardcoded timeout, or an undocumented business requirement), do not guess. Formulate 1–3 concrete, actionable questions for the user to confirm the missing background.

## Output Format

Follow this exact structure:

### 1. Core Verdict
[1-2 sentences directly answering why this code exists and what primary force shaped it.]

### 2. Verified Facts
- **Commit/PR Evidence:** [Exact hash/PR number, date, author intent as written]
- **Guarded Behaviors:** [Explicit tests or error paths verified in source]
- **Documented Constraints:** [Quotes or references from comments/tickets]

### 3. Plausible Inferences & Tradeoffs
- **Design Tradeoffs:** [Why this approach was likely chosen over simpler alternatives]
- **Operational Reality:** [Inferred system characteristics, reliability guards, or performance factors]

### 4. Clarification Needed from You
[Targeted questions to the user regarding unverified assumptions or missing historical context. Omit only if evidence is 100% conclusive.]

### 5. Change Guidance
- **Preserve:** [Critical invariants that must remain intact]
- **Safe to Change:** [Workarounds or constraints that appear obsolete]