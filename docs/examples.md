+++
title = "Worked requests"
navTitle = "Examples"
description = "Start with a prompt, then check the outcome and evidence you receive."
section = "workflows"
order = 1
permalink = "/examples/index.html"
+++

These examples use the same notes app. Adapt the commands and file paths to your project. The sample replies illustrate the expected format.

## Clarify CSV export

**Natural request**

> Find how the notes list filters and paginates. Write acceptance criteria and a work plan for CSV export. The product owner still needs to choose between all notes and the filtered results. Leave the application code unchanged.

**With named skills**

> Use explore to trace notes filtering and pagination, specify to write CSV export criteria, and plan-working to save the work order. The product owner must still choose all notes or the filtered results. Identify work that can start and leave application code unchanged.

- **Result** — The specification identifies the pending row-scope decision. The plan puts CSV formatting work before choosing the row source.
- **Evidence** — The current list filters before paginating. The plan links to the pending acceptance criterion in `_spec/notes-csv-export.md`.
- **Next step or blocker** — Verify CSV escaping with representative rows. The product owner must confirm the row scope before wiring the source.

<h2 id="fix-the-tag-filter">Fix the tag filter</h2>

**Natural request**

> Clearing the last tag hides every note. Reproduce and fix it so an empty selection shows all notes. Keep selected-tag behavior, run regression checks, and leave the edits in the working tree.

**With named skills**

> Use debug to reproduce the empty-selection failure, implement-it to fix it, and test-it to rerun both selection cases. Leave the edits in the working tree.

- **Result** — Clearing the last tag shows all notes.
- **Evidence** — `node --test filter.test.cjs` reproduces the empty-selection failure before the fix. Both cases pass after the fix.
- **Next step or blocker** — The local edits and test result are ready for PR review.

## Review the export PR and update the guide

**Natural request**

> Check the export diff against AC2, which requires all matching rows across pages. Update the existing guide to use the confirmed button label, Export CSV. Leave the implementation unchanged.

**With named skills**

> Use review to assess the export diff against AC2, which requires all matching rows across pages. Use document to update the existing guide to say Export CSV. Leave the implementation unchanged.

- **Result** — The export reads only the visible page. The guide uses the confirmed label.
- **Evidence** — The export calls the paginated list function. With 11 matching notes and a page size of 10, it returns 10.
- **Next step or blocker** — Give the author the finding and verify the correction with matches on multiple pages.

## Package a candidate and check publication

**Natural request**

> Package v1.4.0 locally. Publish only to the local mock registry and only if the exact candidate satisfies RELEASE.md. Save a delivery record.

**With named skills**

> Use deliver to check RELEASE.md against v1.4.0, verify the local package, and publish to the mock registry if eligible. Record the checksum and the status of each action.

- **Result** — In the blocked case, packaging completes and publication is blocked. In the eligible case, both actions complete.
- **Evidence** — Both cases produce a verified package and checksum. The blocked case lacks passing CSV download acceptance and leaves the mock journal empty. The eligible case records one request.
- **Next step or blocker** — For the blocked candidate, rerun download acceptance against that version, then reassess publication.

## Resume CSV export in a fresh session

**Natural request**

> Resume from the current revision and the linked CSV specification, work plan, and verification record. Identify the next eligible item and complete it if its prerequisites are available. Keep the export-scope decision open. Record the checks you ran.

**With named skills**

> At the current revision, use plan-working and the linked CSV spec, plan, and verification record to identify the next eligible item. If its prerequisites are available, use implement-it and test-it to complete it and record the evidence. Keep the row-scope decision open.

- **Result** — The next item is identified from the saved plan. In the verified handoff, completing it required access to the full application.
- **Evidence** — The new session cited the plan and specification, identified the missing application access, and preserved the open choice of export scope.
- **Next step or blocker** — Provide the application and its test command. The first completed item can then be checked against the plan using the actual test result.

See [workflow combinations](/workflows/) for the inputs and handoff rules behind these prompts.
