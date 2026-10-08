---
name: principle-close-delivery-loop
description: Complete an authorized software delivery with a usable, identifiable artifact, recovery appropriate to its risks, and observed results or follow-up feedback. Use for release, deployment, publication, or engineering handoff.
---

# Close the Delivery Loop

Deliver a usable result, account for failure, and carry observations into the next task.

## Apply

- Define the requested delivery: a local artifact, handoff, PR, release, or deployment. Preserve that scope and the existing authorization for external actions.
- Confirm the delivery artifact is supported by the required review and verification evidence and that the intended recipient can access and use it.
- Provide the relevant usage instructions and known limitations. Choose recovery appropriate to the risks, such as reverting an artifact, disabling a feature, or restoring affected data.
- Check whether recovery also addresses persistent data or external side effects. Redeploying older code may leave those changes in place.
- After delivery, perform a proportionate direct check of the delivered result when possible. Record gaps when the target environment is unavailable.
- If delivery fails, inspect the current state before retrying. Avoid repeating an operation that may already have partly succeeded; choose retry, recovery, or escalation based on evidence and consequences.
- Capture observed usage results and unresolved feedback as bounded follow-up work with an owner. Distinguish successful delivery from confirmation that the user's broader problem is solved.

## Evidence

Record the delivered artifact and destination, observed result, recovery path when needed, and follow-up status. State when actual user feedback has not yet been obtained.

## Boundaries

Completion of a local task does not require publication or deployment. This principle does not authorize customer messages, new external writes, or recurring monitoring. Use the task's actual delivery and feedback channels.
