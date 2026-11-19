+++
title = "explore"
description = "Investigate existing behavior, project context, historical rationale, or technical trade-offs, and discover project-configured development checks."
section = "skills"
order = 1
permalink = "/skills/explore/index.html"
source = "skills/explore/SKILL.md"
+++

## What to provide

A question or decision and any known project boundaries.

## What to expect

Expect a direct answer backed by sources you can inspect. The skill places evidence beside the finding it supports and distinguishes confirmed observations from inferences. It calls out an evidence gap when resolving it could change a conclusion or decision.

When asked what checks apply to a project or workspace, expect the configured linters, formatters, type checkers, and other static analysis tools, with their commands, scope, sources, and execution status when available.

## Example

Ask why a retry mechanism uses three attempts. The following file locations and commit are illustrative.

**Result.** The current default is three attempts. The original reason for choosing three remains unknown.

**Evidence.** `src/retry.js:12` sets the default, and `test/retry.test.js:34` asserts that retrying stops after the third failed attempt. Commit `a1b2c3d` introduces the retry mechanism and leaves the choice of limit unexplained.

**Open questions.** Check the caller's timeout budget before deciding whether to raise the limit. If the original rationale matters to the decision, look for a design record or discussion from the time of the change.

When saving an investigation for later use, include the question, inspected scope, and revision or version when available.
