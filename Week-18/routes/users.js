const express = require('express');
const {
  handleGetUserByName,
  handleGetAllUsers,
  handleUpdateUserById,
  handleDeleteUserById,
} = require('../controllers/user');

const router = express.Router();
router.route('/').get(handleGetAllUsers);
router.route('/:name').get(handleGetUserByName).patch(handleUpdateUserById).delete(handleDeleteUserById);
module.exports = router;
