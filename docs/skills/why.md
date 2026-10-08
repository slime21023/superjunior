+++
title = "Why"
description = "Reconstruct historical rationale while separating documentary facts from engineering inference."
permalink = "/skills/why/index.html"
section = "other"
order = 2
source = "skills/why/SKILL.md"
+++

## When to use it

Use for “why is this written this way,” historical intent, architectural tradeoffs, and the constraints that motivated a design. Anchor the investigation to a snippet, symbol, or pattern.

## Gather evidence

Record the target path and symbols. Inspect local Git history with focused blame and file history, then follow commit, ticket, and PR references through available tools.

Prioritize local code, history, and PR discussion. Optional external connections can add evidence; their absence should not stall a local investigation.

Separate findings into three groups:

- Documented facts: explicit records, comments, tests, or discussions.
- Plausible inferences: deductions from structure or defensive behavior.
- Information gaps: context unavailable from the inspected artifacts.

Complex investigations can use the source's investigator and synthesizer templates through an authorized, capable host. These supporting prompts are separate from the [four workflow roles](/subagents/).

## Return the rationale

Lead with the supported core verdict. Then provide verified facts, clearly labeled inferences, targeted clarification questions for missing historical context, and change guidance describing invariants to preserve and assumptions that may safely change.

Omit the clarification section only when documentary evidence is complete. Use the [synthesizer template](/source/skills/why/references/synthesizer-prompt.md) to keep the explanation grounded.

## Repository reference note

The skill names `references/investigator-prompt.md`, while the checked-in file is [references/inversigator-prompt.md](/source/skills/why/references/inversigator-prompt.md). Use the available template when integrating this definition. The handbook records the discrepancy without modifying the source.

## Boundary

An inference about intent is not a recorded historical fact. Ask precise questions when essential context is missing; do not invent rationale.
