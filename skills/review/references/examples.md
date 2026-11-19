# Worked examples

The paths and line numbers are illustrative.

## Report a confirmed tag-filter defect

### Findings

1. **High | Clearing the last tag leaves the notes list empty** — `src/filter.js:18`
   - **Evidence and impact** — The empty-selection branch returns an empty array. The notes list at `src/views/notes.js:42` renders that result directly, so clearing the filter hides all notes. This violates AC1 in `_spec/tag-filter.md`.
   - **Correction and verification** — Return all notes for an empty selection. Clear the last tag from the notes list and verify that all notes appear. Check that a non-empty selection still follows the existing matching rule.

### Review scope

Reviewed the filter diff, its caller, related tests, and AC1 and AC2. The finding is based on static inspection. Tests were not run.

## Report a CSV download verification gap

### Findings

No defects were found within the reviewed scope.

### Open questions

- **CSV download (AC1 in `_spec/csv-export.md`)** — The recorded test run for the reviewed revision covers serialization. To verify the download behavior, trigger export from the notes list and parse the downloaded file.

### Review scope

Reviewed the export diff, notes-list interaction, AC1, and the supplied serializer test result. No end-to-end download check was run during review.
