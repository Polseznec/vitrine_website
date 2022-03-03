const router = require('express').Router();
const productController = require('../controllers/product.controller')

router.post('/new', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.productInfo);

module.exports = router