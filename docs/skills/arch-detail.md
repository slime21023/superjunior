+++
title = "Architecture detail"
description = "Specify one component's contracts, runtime flow, invariants, and failure handling before it is built."
permalink = "/skills/arch-detail/index.html"
section = "senior"
order = 5
source = "skills/arch-detail/SKILL.md"
+++

## When to use it

Use it for a component that is already declared in `_adr/base.xml` and is about to be implemented. It turns that component's boundary into a design concrete enough to build and test against. If the component doesn't exist in the architecture file yet, run [architecture componentization](/skills/arch-componentize/) first.

Architecture detail is part of [senior mode](/skills/senior-mode/).

## What it does

1. Reads `_adr/base.xml` and finds the component by its ID. Its scope and ownership define what to design, its delegates and dependencies define the outbound calls, and its exclusions mark what to keep out.
2. Looks for operational choices that are still open: synchronous request versus asynchronous messaging, in-memory versus durable state, concurrency assumptions, retries, idempotency, and circuit breaking. If a critical one is undecided, it asks you one to three questions with the options and their tradeoffs, and writes nothing until you answer.
3. Models the component in five parts: contracts, runtime flow, invariants, failures, and verification.
4. Saves the result to `_adr/components/{component-id}.md`.

## What you get

A component specification with these sections:

- **Scope and responsibilities**: the component's mission, what it owns, what it delegates, and what it must never do.
- **Public contracts and data models**: type definitions and interface signatures, written in the language you prefer or in neutral pseudocode.
- **Runtime flow**: a Mermaid sequence diagram of the main path between the caller, the component, and its dependencies.
- **Invariants and state**: preconditions, postconditions, business rules that always hold, and allowed state transitions.
- **Failure handling**: a table of failure conditions, whether each is a domain error or a system fault, how it is detected, and how to recover.
- **Verification anchors**: the observable outcome that proves the main path works, the edge cases to cover in tests, and how to isolate dependencies while testing.

The reply confirms the path, shows the full document, and summarizes the primary interface, the outbound dependencies, and the most important invariant or recovery rule.

## Boundaries

The specification contains signatures and data shapes only, with no business logic, function bodies, or framework plumbing. It never adds capabilities the component is meant to avoid or that another component owns. The architecture file is treated as fixed: if a requirement breaks a boundary, it recommends changing `_adr/base.xml` first. Building the component is a separate task for [junior mode](/skills/junior-mode/).

## Example request

```text
Use arch-detail to specify the event-dispatcher component from _adr/base.xml in TypeScript.
Cover timeouts and duplicate deliveries.
```
