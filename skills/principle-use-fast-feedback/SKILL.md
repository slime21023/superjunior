---
name: principle-use-fast-feedback
description: Resolve consequential engineering uncertainty with an early, reliable observation. Use for uncertain behavior, expensive implementation choices, failing checks, flaky signals, or repeated fixes that produce no new evidence.
---

# Use Fast Feedback

Run the cheapest reliable check that can change the next decision.

## Apply

- Identify the uncertain claim and the observation that would distinguish plausible explanations. Define the expected result before inspecting the outcome.
- Use a focused reproduction, existing test, small experiment, or direct artifact inspection before committing to a costly implementation.
- Treat observable facts as questions to investigate. Make genuine product or preference decisions explicit when an experiment cannot settle them.
- On failure, retain the input, command or procedure, and result. Distinguish a product defect from a broken harness, unavailable environment, or unstable signal.
- Correct unreliable observation methods before using their results to guide a fix.
- If the same failure repeats without new evidence, revisit the diagnosis or obtain a different observation before making another speculative edit.

## Evidence

Record the claim, expected and actual results, the resulting decision, and any unresolved uncertainty. Label checks that could not run as unverified.

## Boundaries

A successful build is useful evidence for buildability, but does not establish unrelated runtime behavior. Never lower an acceptance threshold merely to escape a failure.
