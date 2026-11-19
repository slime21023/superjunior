# Worked examples

The paths, commands, and observed results illustrate the report format.

## Complete a tag-filter fix

**Request.** Show all notes when the last selected tag is cleared and preserve behavior with selected tags.

### Result

Clearing the last tag in the notes list displays all notes.

### Changes and basis

- **AC1 and AC2 (`_spec/tag-filter.md`)** — The notes list at `src/views/notes.js:42` uses the shared filter in `src/filter.js:18`. An empty selection returns all notes. A non-empty selection uses the existing matching rule.

### Verification

- **`node --test test/filter.test.js`** — The empty-selection and selected-tag regression cases passed, covering AC1 and AC2.

## Implement CSV serialization while export scope is pending

**Request.** Add CSV export. The user is deciding whether export should include filtered results or all notes.

### Result

CSV serialization is implemented for a supplied set of notes. The notes-list export action is still pending.

### Changes and basis

- **AC1 (`_spec/csv-export.md`, partial)** — `src/export/csv.js:8` serializes supplied note rows as CSV, including fields with commas and quotes. The notes-list action still needs to call it to satisfy the download criterion.

### Verification

- **`node --test test/csv.test.js`** — A fixture containing commas and quotes round-tripped through a CSV parser. This covers serialization.

### Remaining work

- **Row selection and download verification** — Confirm whether export uses the filtered results or all notes to finalize AC2. Then wire the selected row source and verify the downloaded file against AC1 and AC2. The end-to-end check has not run.
