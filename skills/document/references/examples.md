# Worked examples

Product behavior, source references, and versions in these examples are illustrative.

## Record the CSV export scope decision

### Context and constraints

The notes list uses filters and pagination. Users need to export the matching notes from the current view, including matches beyond the visible page. The existing data access rules apply to exported rows.

### Decision and status

**Decision confirmed.** Export all accessible notes matching the active filter. The choice is recorded in `_spec/csv-export.md` under AC2.

**Implementation pending.** The notes-list action still needs to query the matching rows and download the serialized CSV.

### Options and trade-offs

- Export all accessible notes. This supports a full export in one action, while users would need to narrow the result outside the app.
- Export all accessible matches for the current filter. This preserves the user's filter intent and requires querying beyond the visible page.

The confirmed choice keeps the export aligned with the filtered list.

### Impact and follow-up

Reuse the list's filter rules in the export query. Verify that a filter matching notes across multiple pages exports exactly the accessible matching rows.

## Export notes from the notes list

### Purpose and prerequisites

Download a CSV of notes matching the active filter. Start on a release that includes CSV export, with access to the notes list.

### Steps

1. Open the notes list and apply the filters you want to use for export.
2. Select **Export CSV**. The browser should start downloading a file after the export completes.
3. Open the downloaded file with a CSV viewer and check its headers and data rows.

### Success criteria

The file opens as CSV and contains the accessible notes matching the active filter, including matches beyond the visible page. A filter with no matches produces a file with headers and no data rows.

### Failure handling

- If the app shows an export error, record the message and active filter. If retrying produces the same error, give those details to support.
- If the app reports success and the file is missing, check the browser's downloads list. If it shows a blocked download, follow the browser's recovery instructions.
