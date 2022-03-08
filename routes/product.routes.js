const router = require('express').Router();
const productController = require('../controllers/product.controller');
const uploadControllers = require('../controllers/upload.controller');
const multer = require('multer');
const upload = multer();

router.post('/new', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.productInfo);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.delectProduct);


// upload
router.post('/upload', upload.single('file'), uploadControllers.uploadProduct);


module.exports = router