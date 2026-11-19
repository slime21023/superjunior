const fs = require('node:fs');
const { createHash } = require('node:crypto');

const candidate = 'notes v1.4.0\n';
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/candidate.txt', candidate);
const digest = createHash('sha256').update(candidate).digest('hex');
fs.writeFileSync('dist/SHA256SUMS', digest + '  candidate.txt\n');
