+++
title = "Match rigor to risk"
description = "Choose checks that cover the real failure consequences and uncertainty."
permalink = "/skills/principle-match-rigor-to-risk/index.html"
section = "principles"
order = 8
source = "skills/principle-match-rigor-to-risk/SKILL.md"
+++

## When to use it

Apply when selecting review and verification strength or deciding whether evidence supports delivery.

## Apply it

Identify affected callers, persistent data, access control, integrations, concurrency, and uncertainty. Consider reversibility and whether recovery restores side effects as well as code.

Choose the smallest reliable set of checks that covers acceptance conditions and material risks. Reuse existing verification paths. A low-impact change may need inspection and a focused check; shared behavior or persistent-data changes need relevant failure and integration evidence.

Arrange independent review when consequences or uncertainty require it. If required evidence is unavailable, disclose the gap. An authorized alternative is useful when it establishes the same claim.

## Example and record

A wording correction needs direct inspection. An authorization change needs allowed and denied cases, affected integrations, and review strength appropriate to its consequences.

Briefly connect risks to selected checks, actual results, and remaining gaps. A numeric risk scoring system is unnecessary.

## Boundary

Setup cost may change the method. It does not remove an explicit acceptance condition or necessary safety measure. Avoid checks that cannot detect a meaningful failure.
