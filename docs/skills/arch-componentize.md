+++
title = "Architecture componentization"
description = "Persist confirmed layers, component responsibilities, and dependency direction."
permalink = "/skills/arch-componentize/index.html"
section = "other"
order = 6
source = "skills/arch-componentize/SKILL.md"
+++

## Inputs and decision gate

Use after architectural discussion has established layers, ownership, boundaries, and dependency direction. The output is `_adr/base.xml`.

Inventory established decisions before generating the artifact. If component ownership, integration patterns, or consistency boundaries are unresolved, ask one to three targeted architectural questions and wait before writing.

## Model the structure

Assign components to layers with crisp responsibility boundaries. Define unique hyphen-cased IDs and human-readable names.

For each component, state scope, owned responsibilities, delegated work, dependencies, and deliberate exclusions. Dependencies stay within the same or lower layers and must not form cycles.

Use the [XML component prompt](/source/skills/arch-componentize/references/xml-component-prompt.md) and validate:

- Root element `architecture` has `target`, `type`, `pattern`, and version `1.0`.
- Component IDs are unique.
- Dependencies reference declared component or external-system IDs.
- The specification contains conceptual responsibilities rather than implementation details.

## Persist and return

After decisions are resolved, create the needed directory and save the specification to `_adr/base.xml`. Return the saved path, complete XML, and three structural takeaways covering hierarchy, dependency governance, and confirmed invariants.

The definition's architect delegate is declared read-only; the skill's persistence step writes the owner's confirmed specification.

## Boundary

Do not generate method bodies, SQL, configuration scripts, concrete REST paths, RPC signatures, or low-level payload schemas. Missing architectural decisions are not an invitation to invent assumptions.

Use [arch-detail](/skills/arch-detail/) for a declared component after the boundary contract is established.
