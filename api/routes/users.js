const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const checkAuth = require('../middleware/checkAuth');

//?: create a new user
router.post('/signup', userController.createUser);
router.post('/support-users', checkAuth, userController.createSupportUser);
router.post('/signin', userController.signin);
router.put('/update-profile', checkAuth, userController.updateProfile);
router.delete('/:id', checkAuth, userController.deleteUser);

module.exports = router;
