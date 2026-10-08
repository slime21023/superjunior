+++
title = "A deliberate engineering loop"
navTitle = "Overview"
description = "Develop, review, verify, and deliver with clear scope and evidence for the actual result."
section = "start"
order = 0
permalink = "/index.html"
+++

JanStack is a collection of portable agent instructions. Its principles describe good engineering judgment, its workflows define phase boundaries, and potato-mode coordinates an agreed task through the appropriate route.

<ol class="cycle" aria-label="Development cycle">
<li><small>01</small><a href="/skills/workflow-develop/">Develop</a><p>Produce a complete, reviewable candidate.</p></li>
<li><small>02</small><a href="/skills/workflow-review/">Review</a><p>Assess requirements, contracts, and risks.</p></li>
<li><small>03</small><a href="/skills/workflow-verify/">Verify</a><p>Observe the candidate's required behavior.</p></li>
<li><small>04</small><a href="/skills/workflow-deliver/">Deliver</a><p>Hand over a usable, identified result.</p></li>
</ol>

A confirmed defect returns to development when correction is in scope. Missing evidence stays at the affected phase. A consequential decision pauses dependent work. The owner keeps valid evidence and reassesses conclusions affected by changes.

## Choose an entry point

| Your task | Start here |
| --- | --- |
| Complete a feature, fix, or refactor | [Potato mode](/skills/potato-mode/) |
| Perform one engineering phase | [Workflows](/workflows/) |
| Explain a subsystem or investigate a historical choice | [Other skills](/other-skills/) |
| Improve how work is scoped and judged | [The eleven principles](/principles/) |
| Assign a bounded investigation or implementation slice | [Subagents](/subagents/) |

## Start with a concrete outcome

Give the agent access to this repository and specify the acceptance condition and delivery form:

```text
Read skills/potato-mode/SKILL.md.
Fix the parser so an empty input returns an empty result without throwing.
Check the affected callers and deliver the changes as local files.
```

Read [Getting started](/getting-started/) for the working sequence and [Examples](/examples/) for narrower routes. [Host integration](/host-integration/) explains discovery, activation, delegation, and permissions.

## How to read this handbook

The 23 skill reference pages are hand-authored explanations. Each links to its checked-in source definition. The [four workflow roles](/subagents/) keep their TOML definitions in workflow references. The source definition is the execution contract; the handbook provides context and examples.
