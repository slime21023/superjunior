+++
title = "The eleven principles"
navTitle = "Principles overview"
description = "Shared judgment rules that keep development, review, verification, and delivery aligned."
section = "principles"
order = 0
permalink = "/principles/index.html"
+++

The principles are reusable instructions. Workflows load the principles relevant to their phase; potato-mode applies them when selecting units, routing outcomes, handling evidence, and handing off work.

## Reference map

| Principle | Practical question |
| --- | --- |
| [Define done](/skills/principle-define-done/) | What observable result completes this task? |
| [Understand before changing](/skills/principle-understand-before-changing/) | Where does the contract break, and which callers are affected? |
| [Sequence small units](/skills/principle-sequence-small-units/) | What complete outcome can we check before building on it? |
| [Use fast feedback](/skills/principle-use-fast-feedback/) | Which reliable observation changes the next decision? |
| [Keep solutions simple](/skills/principle-keep-solutions-simple/) | What is the smallest sufficient implementation? |
| [Record decisions](/skills/principle-record-decisions/) | What choice and evidence will the next owner need? |
| [Own the work](/skills/principle-own-the-work/) | Who carries the outcome, and what happens next? |
| [Match rigor to risk](/skills/principle-match-rigor-to-risk/) | Which failure paths need stronger evidence? |
| [Review independently](/skills/principle-review-independently/) | Does the actual change support the implementer's claims? |
| [Bind evidence to version](/skills/principle-bind-evidence-to-version/) | Which contents and environment does this result establish? |
| [Close the delivery loop](/skills/principle-close-delivery-loop/) | Can the recipient use the delivered result, and can failure be handled? |

## Apply them across the loop

During development, define the outcome, trace affected behavior, and implement one complete unit with early feedback. During review, inspect the actual change and its contracts, judge meaningful risks, and record findings.

During verification, connect acceptance conditions to reliable observations of an identified artifact. During delivery, reconcile required evidence, use the authorized destination, and check usability and recovery.

Ownership, risk, decisions, and artifact identity span the whole route. They prevent a passing check on an earlier candidate from becoming an unsupported claim about the delivered result.

## Keep the record proportional

A focused fix may need only a brief outcome, reproduction, diff, and result. A migration may need independent assessment, recovery evidence, and persistent-data checks. The principles call for evidence that supports the task; they do not require a new process system.
