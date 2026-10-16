+++
title = "How works"
description = "Explain how existing code works, where responsibilities live, and which layer owns what, from inspected code."
permalink = "/skills/how-works/index.html"
section = "senior"
order = 1
source = "skills/how-works/SKILL.md"
+++

## When to use it

Ask how something works: a function, a request flow, or a whole subsystem you are about to work in. It also answers placement questions, such as where a responsibility should live, which package owns something, or whether code sits in the right layer.

For why the code was written that way, use [why](/skills/why/) instead. How works is part of [senior mode](/skills/senior-mode/).

## What it does

1. Sizes the question. A single function or a flow spanning up to two files is explained directly. A subsystem spanning many files or services is split into angles such as entry point and lifecycle, core state, dependencies, and error boundaries. When the size is unclear, it takes the simpler path and says so, so you can redirect.
2. Reads the code. For a large subsystem it may hand separate angles to read-only explorers, but only when your host allows delegation and the split helps. Otherwise it investigates directly.
3. Combines what it found into one explanation, settles contradictions by checking the code again, and keeps open questions visible.
4. Checks that the answer addresses your original question and follows from the code it read.

It does not change any files while investigating.

## What you get

An explanation written for an experienced engineer new to the area, aimed at a working mental model rather than a line-by-line walkthrough. It uses these sections, dropping any that don't apply:

- **Overview**: what the thing is, what it does, and why it exists.
- **Key concepts**: the types and abstractions you need to follow the rest.
- **How it works**: the runtime flow, step by step, naming the real files and functions.
- **Where things live**: the files and directories you need to start working.
- **Gotchas**: surprising behavior, failure modes, and tricky invariants.

## Boundaries

You get no multi-page code dumps. Code appears only as diagrams, directory trees, or snippets of five lines or fewer that anchor a point. Anything it could not trace is reported as an open question, not filled in with a guess.

## Example request

```text
Use how-works: how does a webhook travel from the HTTP handler to the job queue?
Which package should own signature verification?
```
