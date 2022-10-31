const express = require('express');
const router = express.Router();
const orderControllers = require('../controllers/orders');
const checkAuth = require('../middleware/checkAuth');

router.get('/', checkAuth, orderControllers.getAllOrder);

router.post('/', checkAuth, orderControllers.createOrder);

router.get('/:id', checkAuth, orderControllers.getOrderById);

router.delete('/:id', checkAuth, orderControllers.deleteOrder);

module.exports = router;
