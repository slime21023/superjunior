# Worked examples

The paths, commands, and observed results are illustrative.

## Verify a tag-filter regression

### Verification result

The empty-selection and selected-tag cases passed, covering AC1 and AC2 in `_spec/tag-filter.md`.

### Acceptance criteria and evidence

| Acceptance criterion | Case and expected result | Command or steps | Status and actual result |
| --- | --- | --- | --- |
| AC1 | Clear the last selected tag in a fixture with differently tagged notes. All notes should appear. | `node --test test/filter.test.js` | **Passed.** The empty-selection case returned all fixture notes. |
| AC2 | Select a tag in the same fixture. Only matching notes should appear. | `node --test test/filter.test.js` | **Passed.** The selected-tag regression returned the expected matching notes. |

## Report blocked CSV download verification

### Verification result

CSV serialization passed. The end-to-end download case for AC1 in `_spec/csv-export.md` still needs evidence.

### Acceptance criteria and evidence

| Acceptance criterion | Case and expected result | Command or steps | Status and actual result |
| --- | --- | --- | --- |
| AC1 | Serialize a row with commas and quotes. Parsing the CSV should recover the original field values. | `node --test test/csv.test.js` | **Passed.** The parsed values matched the fixture. |
| AC1 | Open a seeded notes list and trigger export. The downloaded file should parse as CSV. | Start the test environment, open the notes list, trigger export, and parse the downloaded file. | **Blocked.** The test database was offline, so the notes list could not load. |

### Gaps and handoff

- **AC1.** Start and seed the test database, then rerun the notes-list download case. Record whether a file downloads and parses.
