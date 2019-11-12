const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: { type: String },
  authors: { type: String },
  publisher: { type: String }
});

module.exports = mongoose.model('Book', bookSchema);
