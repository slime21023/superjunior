const path = require('node:path');
const root = process.argv[2] && process.argv[2] !== '--broken' ? process.argv[2] : __dirname;
const property = require(path.join(root, 'property.cjs'));
const broken = process.argv.includes('--broken');
const encode = value => '"' + (broken ? value.replaceAll('"', '') : value.replaceAll('"', '""')) + '"';
const decode = field => field.slice(1, -1).replaceAll('""', '"');
const alphabet = ['a', 'b', '"', ',', '\n'];
const seed = 79;
let state = seed;
for (let trial = 0; trial < 60; trial++) {
  let value = '';
  for (let i = 0; i < trial % 12; i++) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    value += alphabet[state % alphabet.length];
  }
  try {
    property({ value, encode, decode });
  } catch (error) {
    console.error('Counterexample seed ' + seed + ': ' + JSON.stringify(value), error.message);
    process.exit(1);
  }
}
console.log('Checked 60 generated cases with seed ' + seed);
