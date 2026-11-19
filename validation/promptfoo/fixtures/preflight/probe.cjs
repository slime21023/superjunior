const fs = require('node:fs');
const { createHash } = require('node:crypto');

const digest = createHash('sha256').update(fs.readFileSync('input.txt')).digest('hex');
fs.writeFileSync('probe-result.txt', digest);
