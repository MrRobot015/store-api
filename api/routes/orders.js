const express = require('express');
const router = express.Router();
const orderControllers = require('../controllers/orders');

router.get('/', orderControllers.getAllOrder);

router.post('/', orderControllers.createOrder);

router.get('/:id', orderControllers.getOrderById);

router.delete('/:id', orderControllers.deleteOrder);

module.exports = router;
