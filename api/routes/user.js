const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

//?: create a new user
router.post('/signup', userController.createUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;