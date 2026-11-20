+++
title = "prin-interface-contracts"
description = "Assess or change a boundary whose inputs, outputs, errors, or compatibility matter to callers."
section = "principles"
order = 2
permalink = "/skills/prin-interface-contracts/index.html"
source = "skills/prin-interface-contracts/SKILL.md"
+++

## When to use

Assess or change a boundary whose inputs, outputs, errors, or compatibility matter to callers.

## How it changes the work

Validate untrusted inputs at the boundary that owns the contract. Define successful outcomes, failures, and observable side effects in terms callers can distinguish.

A CSV query returning zero rows can produce a header-only file. A failed query must remain distinguishable to the caller. Test both cases through the export action.

See [Principles and practices](/principles/) for how to combine it with a core skill.
