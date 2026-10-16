+++
title = "Lexical & expression"
description = "Precise naming, code/comment division, and unified domain vocabulary."
permalink = "/skills/principles-lexical-expression/index.html"
section = "principles"
order = 2
source = "skills/principles-lexical-expression/SKILL.md"
+++

## When to use it

Apply when authoring identifiers, naming functions and types, writing explanatory comments, or aligning ubiquitous project vocabulary.

## Core rules

- **Embed Physical Units**: Numerical variables for durations, sizes, or counts must include units (`timeoutMs`, `maxPayloadBytes`).
- **Code vs. Comments**: Code explains How the logic operates; comments document Why non-obvious choices, edge cases, and design trade-offs were chosen.
- **Domain Vocabulary Consistency**: Use a single canonical verb across the entire repository (never mix `getUser`, `fetchUser`, and `retrieveUser` for the same operation).

## Boundary

Do not write redundant comments that merely translate readable code into English. Keep comments focused on intent and trade-offs.
