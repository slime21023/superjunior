exports.filterNotes = (notes, tags) => tags.length
  ? notes.filter(note => tags.some(tag => note.tags.includes(tag)))
  : [];
