const router = require('express').Router();
const authController = require('../controllers/auth.controller')

router.post('/new', authController.signUp);

module.exports = router