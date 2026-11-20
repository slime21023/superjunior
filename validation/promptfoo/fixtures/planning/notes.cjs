exports.listNotes = (notes, tag, page) => {
  const matches = tag ? notes.filter(note => note.tags.includes(tag)) : notes;
  return matches.slice(page * 10, page * 10 + 10);
};
