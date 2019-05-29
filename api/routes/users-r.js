const express = require('express');
const usersController = require('../controller/users-c');
const checkAuth = require('../middleware/check-auth');
const checkPermission = require('../middleware/check-permission');

const router = express.Router();

router.get('/', checkAuth, checkPermission, usersController.getAll);
router.post('/signup', usersController.create);
router.post('/signin', usersController.login);
router.get('/:userId', checkAuth, checkPermission, usersController.getOne);
router.patch('/:userId', checkAuth, checkPermission, usersController.update);
router.delete('/:userId', checkAuth, checkPermission, usersController.delete);

module.exports = router;