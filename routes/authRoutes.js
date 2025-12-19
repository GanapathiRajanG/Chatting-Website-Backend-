const express = require('express');
const authController = require('../controller/authController');
const profileController = require('../controller/profileController');
const messageController = require('../controller/messageController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/users', authController.protect, authController.restrictTo('admin'), authController.getAllUsers);
router.delete('/users/:id', authController.protect, authController.restrictTo('admin'), authController.deleteUser);
router.put('/users/:id/block', authController.protect, authController.restrictTo('admin'), authController.blockUser);
router.get('/profile', authController.protect, profileController.getProfile);
router.put('/profile', authController.protect, profileController.updateProfile);
router.get('/messages', authController.protect, messageController.getAllMessages);
router.post('/messages', authController.protect, messageController.createMessage);

module.exports = router;