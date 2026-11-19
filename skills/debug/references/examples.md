# Worked examples

Commands, locations, and observations are illustrative.

## Confirm the cause of an empty tag filter

### Diagnosis

**Confirmed.** An empty selection enters the branch that returns an empty array, so the notes list renders zero notes.

### Reproduction and observations

- **Conditions and steps.** Run `node --test test/filter.test.js` with the fixture containing three notes.
- **Expected and actual.** Clearing the last tag should return all three notes. The empty-selection case returned zero. The selected-tag case still returned the expected subset.

### Hypotheses and evidence

- **The filter discards the input on empty selection.** A direct call to the shared filter with the same fixture reproduces the empty result. The empty-selection branch at `src/filter.js:18` returns `[]`, and the notes list at `src/views/notes.js:42` renders that result directly.

### Corrective direction and handoff

- **Corrective direction.** Return all notes for an empty selection.
- **Verification.** Rerun both filter cases and clear the last tag from the notes list. Confirm that the empty selection shows all notes and a non-empty selection retains its matching behavior.

## Investigate an intermittent CSV download failure

### Diagnosis

**Unresolved.** The failure occurs before the download handler starts. The available logs do not distinguish a query failure from a serialization failure.

### Reproduction and observations

- **Conditions and steps.** In the test environment, open the same seeded notes list with the same filter and trigger CSV export 20 times.
- **Expected and actual.** Each attempt should download a parseable CSV. Three attempts showed an export error and produced no file. In each failed attempt, the action log recorded that export started but contained no download-handler entry.

### Hypotheses and evidence

| Hypothesis | Discriminating check | Observation and assessment |
| --- | --- | --- |
| The notes query fails. | Record the query outcome for each attempt. | The action log omits the query result. This remains open. |
| CSV serialization fails after a successful query. | Record the query outcome and whether serialization completes for the same attempt. | The action log omits both outcomes. This remains open. |

### Corrective direction and handoff

- **Next check.** Record query and serialization outcomes for the same export attempt in the test environment. Repeat the seeded-list procedure and capture the first failed stage.
