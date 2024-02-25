const mongoose = require('mongoose');

const blogschema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
});

const Blog = mongoose.model('Blog', blogschema);

module.exports = Blog;