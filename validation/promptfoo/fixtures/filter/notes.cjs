const { filterNotes } = require('./filter.cjs');

exports.listNotes = (notes, tags) => filterNotes(notes, tags);
