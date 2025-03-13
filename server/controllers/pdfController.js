const PDF = require('../models/PDF');

exports.uploadPDF = async (req, res) => {
  try {
    const pdf = await PDF.create({ url: req.body.url });
    res.status(201).json({ message: 'PDF uploaded successfully', pdf });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading PDF', error });
  }
};

exports.getPDFs = async (req, res) => {
  try {
    const pdfs = await PDF.findAll();
    res.json(pdfs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching PDFs', error });
  }
};