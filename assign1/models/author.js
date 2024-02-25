const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const author = mongoose.model('author', authorSchema);

module.exports = author;
