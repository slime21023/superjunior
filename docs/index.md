+++
title = "Engineering skills for code agents"
navTitle = "Overview"
description = "Skills that help a code agent make scoped, tested, reviewed changes, and explain and design before it builds."
section = "start"
order = 0
permalink = "/index.html"
+++

SuperJunior gives your code agent two ways to work. [Junior mode](/skills/junior-mode/) handles daily code changes: features, fixes, and refactors. [Senior mode](/skills/senior-mode/) handles work that ends in understanding or design: explaining code, finding out why it was written that way, and agreeing on architecture before anyone builds it. Senior mode never edits product code; when a design is ready, it hands a brief to junior mode.

## The building blocks

Both modes are built from smaller skills you can also use on their own.

- [Workflows](/workflows/) are the steps of a code change: align scope, test-first implementation, scientific debugging, self-review, and atomic commits.
- [Design principles](/principles/) are the standards a self-review checks: naming, functions and control flow, module boundaries, and architecture.
- [Agent roles](/subagents/) let the agent hand one workflow to a subagent with a clear read or write boundary. In a single session, the agent follows the workflow itself.

## The junior mode cycle

<ol class="cycle" aria-label="Development cycle">
<li><small>01</small><a href="/skills/workflow-align-scope/">Align Scope</a><p>State the problem, the done criteria, and what the change touches.</p></li>
<li><small>02</small><a href="/skills/workflow-context-tdd/">Context TDD</a><p>Write a failing test, make it pass, then tidy up.</p></li>
<li><small>03</small><a href="/skills/workflow-self-review/">Self Review</a><p>Check the diff against the four design layers.</p></li>
<li><small>04</small><a href="/skills/workflow-atomic-commit/">Atomic Commit</a><p>Commit in small steps that each build and pass.</p></li>
</ol>

An exception or a failing test sends the work to [scientific debugging](/skills/workflow-scientific-debug/), which reproduces the defect and fixes its root cause. Changes that cannot alter runtime behavior, such as documentation or formatting, take a shorter light route. An open design question pauses the work and comes back to you.

## Choose where to start

| You want to | Start with |
| :--- | :--- |
| Add a feature, fix a bug, or refactor | [Junior mode](/skills/junior-mode/) |
| Understand how code works or why it was built that way | [Senior mode](/skills/senior-mode/) |
| Decide on an architecture before building | [Senior mode](/skills/senior-mode/) |
| Run one step, such as a review or a commit | The matching [workflow](/workflows/) |
| Check code against a specific standard | A [design principle](/principles/) |

## A first request

```text
Use junior-mode to fix the parser: an empty input should return an empty result instead of throwing.
Check the callers that depend on it and deliver tested local commits.
```

[Getting started](/getting-started/) covers installation and how to write a good request. [Examples](/examples/) has requests for common situations, and [Host integration](/host-integration/) explains what your code agent must support.
