const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
  url: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PDF', pdfSchema);