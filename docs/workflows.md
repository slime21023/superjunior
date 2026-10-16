+++
title = "Workflows"
navTitle = "Workflows overview"
description = "Five workflows that take a code change from an agreed scope to a clean commit. Junior mode runs them in order; you can also run any one on its own."
section = "workflows"
order = 0
permalink = "/workflows/index.html"
+++

Each workflow covers one phase of a code change. Together they are the phases of [junior mode's](/skills/junior-mode/) full route: agree on the scope, build the change test-first, debug any defect, review the diff, and commit it.

## The five workflows

| Workflow | Use it when | You get |
| :--- | :--- | :--- |
| [Align scope](/skills/workflow-align-scope/) | You are about to change code and want the problem, finish line, and affected files agreed first. | A scope card: problem statement, Done Criteria, blast radius, and the order of work. |
| [Context TDD](/skills/workflow-context-tdd/) | You are adding a feature or fixing a reported defect. | Code built test-first, with failing and passing evidence for each check. |
| [Scientific debug](/skills/workflow-scientific-debug/) | An exception, failing test, or unexpected behavior shows up. | A reproduction test, a root-cause fix, and a green suite, or a structured question when the agent is stuck. |
| [Self review](/skills/workflow-self-review/) | The change is ready and you want it checked before it is committed or handed off. | A pass, or a list of concrete findings to fix. |
| [Atomic commit](/skills/workflow-atomic-commit/) | You are staging changes and writing commit messages. | Single-purpose commits that each pass the tests and explain why the change was made. |

## Outcomes

Every workflow ends with one of four outcomes. Not every workflow uses all four; each page lists the ones it can return.

| Outcome | Meaning | What happens next |
| :--- | :--- | :--- |
| `pass` | The phase finished and its conditions are met. | Move to the next phase. |
| `needs-change` | A confirmed defect or design problem remains. | Go back to implementation or debugging. |
| `unverified` | The evidence is missing or unreliable, for example a broken test environment. | Stay in the phase until reliable evidence exists, or report the gap. |
| `needs-decision` | A requirement or design choice has more than one valid answer. | Stop and ask you a specific question. |

A `pass` covers only that phase. A passing review does not mean the change has been committed.

## On its own or through junior mode

Run a single workflow when you need only that phase: aligning scope before you write the code yourself, debugging one failure, reviewing a diff, or tidying up commits. Name the workflow in your request and the agent follows it and returns that phase's outcome.

Use junior mode when you want the whole change delivered. It picks the route, runs the workflows in order, sends defects to debugging, keeps a task record so the work can be paused and resumed, and ends with one report covering every phase.
