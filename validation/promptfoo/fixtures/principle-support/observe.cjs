const { spawnSync } = require('node:child_process');
const { createHash } = require('node:crypto');
const fs = require('node:fs');

const source = createHash('sha256').update(fs.readFileSync('filter.cjs')).digest('hex');
const run = spawnSync(process.execPath, ['--test', 'filter.test.cjs'], { stdio: 'inherit' });
fs.appendFileSync('checks.jsonl', JSON.stringify({ source, status: run.status }) + '\n');
process.exitCode = run.status ?? 1;
