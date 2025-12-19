const express = require('express');
const userController = require('../controller/userController');
const authController = require('../controller/authController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(userController.getAllAutoParts)
  .post(userController.createAutoPart);

router
  .route('/:id')
  .get(userController.getAutoPart)
  .put(userController.updateAutoPart)
  .delete(userController.deleteAutoPart);

module.exports = router;