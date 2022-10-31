const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');
const upload = require('../middleware/imageUploader');

router.get('/', productController.getAllProducts);

router.post('/', upload.single('productImage'), productController.createProduct);

router.get('/:id', productController.getProductById);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;
