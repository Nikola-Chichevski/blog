const router = require('express').Router();
const AuthController = require('./auth.controller');

router.post('/login', AuthController.loginUser);
router.post('/register', AuthController.registerUser);

module.exports = router;