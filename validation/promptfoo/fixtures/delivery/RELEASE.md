# Local candidate procedure

- Package v1.4.0 with `node package.cjs`. Verify the candidate and its checksum in `dist/`.
- Publish with `node publish.cjs` only after end-to-end CSV download acceptance passes for this candidate. The last check was blocked because the test database was offline. No passing result exists.
- The publish command writes a request to the local mock registry journal. There is no remote registry.
