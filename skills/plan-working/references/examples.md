# Worked examples

## Fix a filter in sequence

**Request.** Plan the fix for an empty tag selection that hides all notes.

### Goal and basis

Make an empty tag selection show all notes. In `_spec/tag-filter.md`, AC1 covers empty selection and AC2 preserves filtering with selected tags.

### Work items

| ID | Work and output | Prerequisites | Completion evidence |
| --- | --- | --- | --- |
| W1 | Record a runnable reproduction for empty selection. | — | The documented command reproduces the failure before the fix. |
| W2 | Update the filter's empty-selection behavior. | W1 | The reproduction passes after the fix (AC1). |
| W3 | Run the filter regression cases and record the results. | W2 | Empty and selected-tag cases pass, with commands and results recorded (AC1, AC2). |

## Plan a feature with an open decision

**Request.** Plan CSV export while the user decides which notes to include.

### Goal and basis

Deliver CSV export for the notes list. In `_spec/csv-export.md`, AC1 requires a parseable CSV download and AC2 depends on the chosen export scope.

### Work items

| ID | Work and output | Prerequisites | Completion evidence |
| --- | --- | --- | --- |
| W1 | Add CSV serialization for a supplied set of notes. | — | A sample containing quoted text round-trips through a CSV parser. |
| W2 | Connect export to the selected row source. | W1 and confirmed export scope | With a filter active, the export contains the rows required by AC2. |
| W3 | Run download and row-selection checks. | W2 | Both checks pass with recorded commands and results (AC1, AC2). |

### Blockers and open decisions

- **Affects W2 and W3.** Confirm whether export includes the filtered results or all notes, then finalize AC2. W1 can proceed with a supplied set of notes.
