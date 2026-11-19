const { test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { listNotes } = require(path.resolve(process.argv[2] ?? __dirname, 'notes.cjs'));
const notes = [{ tags: ['a'] }, { tags: [] }, { tags: ['b'] }];

test('empty selection', () => assert.deepEqual(listNotes(notes, []), notes));
test('selected tags', () => {
  assert.deepEqual(listNotes(notes, ['a']), [notes[0]]);
  assert.deepEqual(listNotes(notes, ['b', 'a']), [notes[0], notes[2]]);
  assert.deepEqual(listNotes(notes, ['missing']), []);
});
