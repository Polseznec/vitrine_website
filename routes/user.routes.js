const router = require('express').Router();
const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')

router.post('/register', authController.signUp);
router.post('/login', authController.logIn);
router.post('/logout', authController.logOut);

router.get('/', userController.getAllUsers)
router.get('/:id', userController.userInfo)


module.exports = router