+++
title = "Architecture componentization"
description = "Record confirmed layers, component responsibilities, and dependency direction in one architecture file."
permalink = "/skills/arch-componentize/index.html"
section = "senior"
order = 4
source = "skills/arch-componentize/SKILL.md"
+++

## When to use it

Use it once the architecture has been discussed and decided, usually after [craft discussing](/skills/craft-discussing/), and you want the structure written down: which layers exist, which components live in each, and what each one owns. The result is the reference that [architecture detail](/skills/arch-detail/) and later implementation work build on.

Architecture componentization is part of [senior mode](/skills/senior-mode/).

## What it does

1. Collects the decisions already made in the conversation: layering, system boundaries, and core subsystems.
2. Looks for anything still open, such as unclear ownership ("where does cache invalidation live?"), unspecified integration between layers, or missing consistency boundaries. If an open question affects a boundary, ownership, or dependency direction, it stops and asks you one to three targeted questions, each with the options it sees, and writes nothing until you decide. A question that changes no recorded boundary can be listed in the file as a pending decision, but only if you agree to defer it.
3. Arranges components into layers, from the public entry point down to infrastructure, and gives each one a single clear responsibility.
4. Checks the dependency direction: a component depends only on its own layer or lower ones, and circular or cross-cutting violations are flagged as soon as they appear.
5. Saves the result to `_adr/base.xml`.

## What you get

The file `_adr/base.xml` describes the system as a whole. It names the target, its type (library, service, CLI, or tool), the architectural pattern, and a short summary. It lists the layers in order with their access rules, the shared concerns that cut across layers, such as error handling or logging, and any open questions you agreed to defer. For each component it records:

- a unique hyphen-cased ID, a readable name, and its layer;
- its scope, and what it owns;
- what it delegates and to whom;
- what it depends on and why;
- what it deliberately avoids doing.

The reply confirms the saved path, shows the full file, and closes with three takeaways: the number of layers and components, the main dependency rule, and the key decisions the file locks in.

## Boundaries

The file records structure, not implementation. It contains no code, SQL, or configuration, and no REST paths, RPC signatures, method parameters, or type schemas. The skill never fills an undecided boundary with an assumption.

## Example request

```text
Use arch-componentize to record the layers and components we just agreed on for the ingestion service.
Ask me before writing anything we haven't decided.
```
