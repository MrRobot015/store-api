const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');
const upload = require('../middleware/imageUploader');
const checkAuth = require('../middleware/checkAuth');

router.get('/', productController.getAllProducts);

router.post('/', checkAuth, upload.single('productImage'), productController.createProduct);

router.get('/:id', productController.getProductById);

router.put('/:id', checkAuth, productController.updateProduct);

router.delete('/:id', checkAuth, productController.deleteProduct);

module.exports = router;
