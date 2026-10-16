+++
title = "A deliberate engineering loop"
navTitle = "Overview"
description = "Align scope, execute context-first TDD, self-review against four design layers, and deliver atomic commits."
section = "start"
order = 0
permalink = "/index.html"
+++

SuperJunior is a collection of portable agent instructions. Its Four-Layer Design Principles govern software craft, its workflows enforce daily engineering discipline, and potato-mode coordinates an agreed task through the complete lifecycle.

<ol class="cycle" aria-label="Development cycle">
<li><small>01</small><a href="/skills/workflow-align-scope/">Align Scope</a><p>Define the problem and map blast radius.</p></li>
<li><small>02</small><a href="/skills/workflow-context-tdd/">Context TDD</a><p>Red-Green-Refactor with 3-quadrant specs.</p></li>
<li><small>03</small><a href="/skills/workflow-self-review/">Self Review</a><p>Audit against the 4 design layers.</p></li>
<li><small>04</small><a href="/skills/workflow-atomic-commit/">Atomic Commit</a><p>Deliver single-responsibility commits.</p></li>
</ol>

A confirmed defect or exception triggers [Scientific Debug](/skills/workflow-scientific-debug/) to build a minimal reproduction test and fix the root cause. Missing test evidence stays at the affected phase. A consequential decision pauses dependent work.

## Choose an entry point

```xml
<entry-points>
  <entry task="Complete a feature, fix, or refactor">Potato mode</entry>
  <entry task="Perform one engineering phase">Workflows</entry>
  <entry task="Explain a subsystem or investigate a historical choice">Other skills</entry>
  <entry task="Master software design craft">Four-layer design principles</entry>
  <entry task="Assign a bounded investigation or implementation slice">Subagents</entry>
</entry-points>
```

- [Potato mode](/skills/potato-mode/): Coordinate a scoped feature, fix, or refactor through the full lifecycle.
- [Workflows](/workflows/): Execute an individual daily workflow (Scope alignment, Context TDD, Self review, Atomic commit).
- [Other skills](/other-skills/): Subsystem onboarding, historical rationale, and component architecture design.
- [Four-layer design principles](/principles/): Standards across lexical, function, module, and architecture boundaries.
- [Subagents](/subagents/): Delegate bounded tasks to specialized read-only or scoped implementation roles.

## Start with a concrete outcome

Give the agent access to this repository and specify the acceptance condition and delivery form:

```text
Read skills/potato-mode/SKILL.md.
Fix the parser so an empty input returns an empty result without throwing.
Check the affected callers and deliver the changes as local files.
```

Read [Getting started](/getting-started/) for the working sequence and [Examples](/examples/) for narrower routes. [Host integration](/host-integration/) explains discovery, activation, delegation, and permissions.

## How to read this handbook

The skill reference pages are hand-authored explanations. Each links to its checked-in source definition. The [specialized agent roles](/subagents/) keep their TOML definitions in their respective skill directories. The source definition is the execution contract; the handbook provides context and examples.
