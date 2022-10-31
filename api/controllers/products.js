const { Product } = require('../../models');

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.createProduct = async (req, res, next) => {
  const { name, price } = req.body;
  const productImage = req.file.path;
  try {
    const newProduct = await Product.create({ name, price, productImage });
    res.status(200).json(newProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

exports.getProductById = async (req, res, next) => {
  const productId = req.params.id;
  try {
    const product = await Product.findOne({ where: { productId } });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateProduct = async (req, res, next) => {
  const productId = req.params.id;
  const { name, price } = req.body;
  try {
    const product = await Product.findOne({ where: { productId } });
    product.name = name;
    product.price = price;
    product.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.deleteProduct = async (req, res, next) => {
  const productId = req.params.id;
  try {
    const product = await Product.findOne({ where: { productId } });

    product.destroy();
    res.status(200).json({ message: 'Product delete successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
