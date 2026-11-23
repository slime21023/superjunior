# Worked examples

## A discussion that converges

**Request.** I want notes sharing with permissions, comments, and real-time editing.

**Discussion.** The agent restates the idea: "You want other people to see your notes." It asks one question that changes the direction and recommends an answer: "Is the first need that someone else can read a note, or that several people edit it together? I recommend reading first, because the other features build on it." The user confirms reading.

**Result**

```text
Goal: Let a user give another person read-only access to one note.
In scope: A shareable link for a single note that can be revoked.
Out of scope: Permission levels, comments, real-time editing, team workspaces.
Direction: Read-only link per note. It is the smallest change that serves the confirmed need and does not block later permissions.
Rejected: Per-user permissions (needs accounts and an invitation flow); real-time collaboration (needs conflict handling and is not required to read a note).
Open decisions: none
Next skill: specify
```

## A discussion that stops at a decision needing evidence

**Request.** The notes list feels slow. I want to rewrite it with virtual scrolling.

**Discussion.** The agent separates the problem from the proposed solution: "The goal is a faster list. Virtual scrolling is one way to get there." It cannot tell whether rendering, the query, or the payload size is the cause, and the cheapest fix depends on the answer. The user confirms the goal but not the rewrite.

**Result**

```text
Goal: Make the notes list feel responsive when it contains many notes.
In scope: Finding where the time is spent, then the smallest change that removes it.
Out of scope: Rewriting the list component before the cause is known.
Direction: Measure first. Choose the fix after the cause is identified. Proposal, not confirmed: virtual scrolling only if rendering is the cause.
Rejected: Immediate virtual-scrolling rewrite (largest change, justified only if rendering is the bottleneck).
Open decisions: What "responsive" means in observable terms, such as time to first render for a list of a given size. Blocks the acceptance criteria.
Next skill: explore
```
