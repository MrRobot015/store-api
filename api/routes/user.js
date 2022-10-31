const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const checkAuth = require('../middleware/checkAuth');

//?: create a new user
router.post('/signup', userController.createUser);
router.post('/signin', userController.signin);
router.delete('/:id', checkAuth, userController.deleteUser);

module.exports = router;
