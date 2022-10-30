const express = require('express');
const { Product } = require('../../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res, next) => {
  const { name, price } = req.body;
  console.log(req.body);
  try {
    const newProduct = await Product.create({ name, price });
    res.status(200).json(newProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res, next) => {
  const productId = req.params.id;
  try {
    const product = await Product.findOne({ where: { productId } });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res, next) => {
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
});

router.delete('/:id', async (req, res, next) => {
  const productId = req.params.id;
  try {
    const product = await Product.findOne({ where: { productId } });

    product.destroy();
    res.status(200).json({ message: 'Product delete successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
