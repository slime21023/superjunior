# Worked examples

Paths, line numbers, and commit IDs below are illustrative.

## Trace current behavior

**Request.** What happens when the user clears every tag from the saved filter?

**Reply.** Clearing every tag shows all notes. `src/filter.js:18` returns the input list when no tags are selected, and `src/views/notes.js:42` renders that returned list.

## Investigate historical rationale

**Request.** Why did we choose three retry attempts?

### Result

The current default is three attempts. The original reason for choosing three remains unknown.

### Evidence

- **Confirmed.** `src/retry.js:12` sets the default. `test/retry.test.js:34` asserts that retries stop after the third failed attempt.
- **Confirmed.** Commit `a1b2c3d` introduces the limit and describes adding retries. Its message leaves the choice of three unexplained.
- **Inference.** The caller's deadline may constrain the retry count. `src/client.js:27` supplies a deadline, but the introduction commit does not connect it to the limit.

### Open questions

- Look for the design discussion linked from the introducing change to establish the original rationale.
- If the goal is to raise the limit, confirm the caller's remaining timeout budget under repeated failures.
