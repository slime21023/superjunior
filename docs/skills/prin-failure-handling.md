+++
title = "prin-failure-handling"
description = "Reason about errors, retries, and partial completion in stateful work or external calls."
section = "principles"
order = 4
permalink = "/skills/prin-failure-handling/index.html"
source = "skills/prin-failure-handling/SKILL.md"
+++

## When to use

Reason about errors, retries, and partial completion in stateful work or external calls.

## How it changes the work

Identify who observes and handles a failure and what state survives it. Distinguish a failed dependency from a valid empty result. Verify the state before retrying an operation with an uncertain outcome.

If writing a replacement file fails, keep the previous valid file available. Exercise a failed write and a subsequent retry, then verify which version is visible.

See [Principles and practices](/principles/) for how to combine it with a core skill.
