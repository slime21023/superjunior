+++
title = "Why"
description = "Find out why code is written the way it is, with recorded facts kept apart from inference."
permalink = "/skills/why/index.html"
section = "senior"
order = 2
source = "skills/why/SKILL.md"
+++

## When to use it

Ask why a piece of code exists in its current form: an odd guard, a hardcoded timeout, a pattern that looks more complicated than it needs to be. Use it before you change or remove code whose purpose you can't see.

For how code works today, use [how works](/skills/how-works/). Why is part of [senior mode](/skills/senior-mode/).

## What it does

1. Pins down the code in question: file, line range, and main symbols.
2. Digs through local Git history for the commits that introduced and reshaped it, and follows commit, PR, and ticket references. It reads PR descriptions and review comments when a GitHub or GitLab CLI is available.
3. Looks at the surrounding code: tests that would fail without it, comments, and defensive patterns such as retries, timeouts, and null checks.
4. Sorts every signal into documented facts, plausible inferences, and information gaps.

Local history, PR discussion, and source code come first. Issue trackers and other external sources are used when available, and the investigation continues without them when they are not. For a complex investigation, the agent may hand parts of the search to investigator subagents, but only when your tool allows delegation.

## What you get

An answer that leads with the verdict, then backs it up:

- **Core verdict**: the main reason the code exists, in one or two sentences.
- **Verified facts**: commit hashes, authors, dates, quoted PR or review text, and tests that guard the behavior.
- **Plausible inferences**: likely tradeoffs and defensive reasons, each marked as inference.
- **Clarification needed from you**: targeted questions about context the history doesn't hold, such as offline decisions or undocumented client constraints. This section is omitted only when the record is complete.
- **Change guidance**: what to preserve and what looks safe to modernize.

## Boundaries

An inference about intent is never presented as recorded fact. When the trail runs cold, for example a commit that says only "fix edge case", it asks you rather than inventing a reason. It reads code and history only and never changes files.

## Example request

```text
Use the why skill: why does src/sync/client.ts retry exactly three times with a 900 ms delay?
Tell me what must be preserved if I replace it with the shared retry helper.
```
