const express = require('express');
const router = express.Router();
const { Order } = require('../../models');

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({ include: 'products' });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res, next) => {
  const { order_id, productId, productCount } = req.body;
  try {
    const order = await Order.create({ order_id, productId, productCount });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res, next) => {
  const order_id = req.params.id;
  try {
    const order = await Order.findOne({ order_id });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res, next) => {
  const order_id = req.params.id;
  try {
    const order = await Order.findOne({ order_id });
    order.destroy();
    res.status(200).json({ message: 'order delete successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
