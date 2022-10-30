const express = require('express');
const router = express.Router();
const ProductControllers = require('../controllers/products');

router.get('/', ProductControllers.getAllProducts);

router.post('/', ProductControllers.createProduct);

router.get('/:id', ProductControllers.getProductById);

router.put('/:id', ProductControllers.updateProduct);

router.delete('/:id', ProductControllers.deleteProduct);

module.exports = router;
