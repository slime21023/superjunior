# Worked examples

## A behavior change with clear boundaries

**Request.** When no tags are selected, show all notes. Preserve the current behavior when one or more tags are selected.

**Output file** `_spec/tag-filter.md`

```markdown
## Goal
Show all notes when the user clears the tag filter.

## Acceptance criteria
- Given notes with different tags, clearing the last selected tag displays all notes.
- Given one or more selected tags, the displayed notes match the results for the same selections before this change.
```

## A specification with a pending decision

**Request.** Add CSV export to a notes list that supports filtering.

**Output file** `_spec/csv-export.md`

```markdown
## Goal
Let users download notes from the list as a CSV file.

## Requirements and scope
- **R1** — Users can trigger CSV export from the notes list.

## Acceptance criteria
- **AC1 (R1)** — Given a list containing notes, triggering export downloads a parseable CSV file.
- **AC2 (R1, pending)** — The expected CSV rows with a filter active depend on the export scope decision.

## Assumptions and open decisions
- **Export scope (blocks AC2)** — Should the CSV include the current filtered results or all notes? Confirm the expected rows before finalizing AC2.
```
