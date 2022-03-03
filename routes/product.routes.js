const router = require('express').Router();
const productController = require('../controllers/product.controller')

router.post('/new', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.productInfo);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.delectProduct);

module.exports = router