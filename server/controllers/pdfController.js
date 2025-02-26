const PDF = require('../models/PDF');

exports.uploadPDF = async (req, res) => {
  try {
    const pdf = new PDF({ url: req.body.url }); // Adjust based on your model
    await pdf.save();
    res.status(201).json({ message: 'PDF uploaded successfully', pdf });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading PDF', error });
  }
};

exports.getPDFs = async (req, res) => {
  try {
    const pdfs = await PDF.find();
    res.json(pdfs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching PDFs', error });
  }
};