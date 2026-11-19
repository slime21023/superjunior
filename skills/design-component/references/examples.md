# Worked examples

## Specify a pure tag filter

**Basis.** In `_spec/tag-filter.md`, AC1 requires all notes for an empty selection. AC2 preserves matching for non-empty selections.

- **Contract.** `filterNotes(notes, selectedTags)` accepts the caller's note list and selected tag IDs. An empty selection returns all notes in input order. A non-empty selection uses the existing matching rule and preserves its output order. The function leaves both inputs unchanged and uses the existing input contract.
- **Verification.** For AC1, use notes with different tags and verify that an empty selection returns them all in order. For AC2, reuse the existing selected-tag cases and verify that inputs remain unchanged.

## Design CSV export across components

### Goal and basis

Download current filtered results as CSV. In `_spec/csv-export.md`, AC1 requires a parseable CSV download. Confirmed AC2 requires all rows matching the active filter, including matches beyond the visible page.

### Component responsibilities and boundaries

- **Export action** owns the download flow and user-visible status. It passes the active filter to the notes query and the returned rows to the serializer.
- **Notes query** owns filter interpretation and retrieves matching rows from the notes store.
- **CSV serializer** converts the supplied rows to CSV.

### Interfaces and behavior

| Operation | Inputs and preconditions | Outputs and side effects | Failure outcome |
| --- | --- | --- | --- |
| Query export rows | Active filter in the existing filter format | All matching authorized rows without display pagination | Read failure is returned to the export action. |
| Serialize rows | Rows with all required export fields | CSV text with headers and escaped values | Missing required fields produce a serialization error. |
| Export filtered notes | Current filter and an available download handler | Starts the download after the query and serialization succeed | Shows an export error and leaves the current list and filters intact. |

### Interactions and verification

The export action queries rows, serializes the complete result, then passes the CSV to the download handler. If the query or serializer fails, the action shows an export error and does not initiate a download.

- **AC1.** Parse the export and check that values with commas and quotes round-trip. An empty result exports headers.
- **AC2.** Apply a filter with matches on multiple pages and verify that the export contains all and only matching authorized rows.
- **Failure handling.** Exercise query and serialization failures separately and verify the error message, absence of a download, and preservation of the filter.

### Design decisions and open questions

Reuse the list's filter semantics in the export query so both paths agree on which notes match. The export query reads all matches while the list keeps its existing pagination.
