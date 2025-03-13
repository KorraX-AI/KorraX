const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const product = new Product({ name, description, price });
    await product.save();
    res.status(201).json({ message: 'Product created', product });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};
