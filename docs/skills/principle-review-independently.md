+++
title = "Review independently"
description = "Form the judgment from requirements, actual contents, and evidence."
permalink = "/skills/principle-review-independently/index.html"
section = "principles"
order = 9
source = "skills/principle-review-independently/SKILL.md"
+++

## When to use it

Apply to code review, contested assumptions, and high-risk work requiring independent assessment.

## Apply it

Read the original request, acceptance conditions, and actual artifact or diff. Use the implementer's explanation as context, then verify consequential claims.

Inspect affected contracts and sibling paths. Consider concrete failures involving inputs, state, integration, or permissions. Assess whether the design is understandable and checks can detect important failures.

Give each finding a location, impact, and reproduction or reasoning. Distinguish observed defects from plausible unconfirmed risks. Assess other reviewers' findings on their merits and record a concrete disposition.

## Independence and record

When independent review is required, choose a reviewer who did not implement the change, when available and authorized. If unavailable, disclose the missing assessment; self-review cannot satisfy it.

Record the reviewed version, material findings, dispositions, and gaps. Favorable review leaves behavioral verification to its own conditions.

## Boundary

A review-only request preserves product contents unless fixes are authorized. A different model alone does not establish independence. Personal style preferences block only when they violate a requirement or have a concrete consequence.
