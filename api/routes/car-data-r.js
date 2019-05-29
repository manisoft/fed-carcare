const express = require('express');
const carDataController = require('../controller/car-data-c');
const checkAuth = require('../middleware/check-auth');
const checkPermission = require('../middleware/check-permission');


const router = express.Router();

router.get('/', checkAuth, checkPermission, carDataController.getAll);
router.post('/', checkAuth, carDataController.create);
router.get('/:carId', checkAuth, carDataController.getOne);
router.get('/query/:userId', checkAuth, carDataController.getByUser);
router.patch('/:carId', checkAuth, carDataController.update);
router.delete('/:carId', checkAuth, carDataController.delete);

module.exports = router;