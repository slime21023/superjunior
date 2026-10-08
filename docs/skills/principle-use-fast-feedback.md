+++
title = "Use fast feedback"
description = "Resolve uncertainty with the cheapest reliable observation that changes the next decision."
permalink = "/skills/principle-use-fast-feedback/index.html"
section = "principles"
order = 4
source = "skills/principle-use-fast-feedback/SKILL.md"
+++

## When to use it

Apply to uncertain behavior, expensive choices, failing checks, unstable signals, or repeated speculative fixes.

## Apply it

Name the uncertain claim and define an expected result before observing it. Choose a focused reproduction, existing test, small experiment, or direct inspection that distinguishes plausible explanations.

Investigate facts through observations. Make product and preference decisions explicit when an experiment cannot settle them.

On failure, retain the input, procedure, and result. Distinguish product defects from broken harnesses, unavailable environments, and unstable signals. Repair an unreliable observation method before using its output to guide implementation.

If the same failure repeats without new evidence, obtain another observation or revisit the diagnosis before editing again.

## Example and record

A failing import test caused by a missing fixture does not establish a parser defect. Repair the fixture setup, then observe the parser's actual response.

Record the claim, expected and actual results, resulting decision, and remaining uncertainty. Checks that cannot run stay unverified.

## Boundary

A successful build establishes buildability. It does not prove unrelated runtime behavior. Acceptance thresholds remain tied to the agreed contract.
