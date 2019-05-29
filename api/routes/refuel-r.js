const express = require('express');
const refuelController = require('../controller/refuel-c');
const checkAuth = require('../middleware/check-auth');
const checkPermission = require('../middleware/check-permission');



const router = express.Router();

router.get('/', checkAuth, checkPermission, refuelController.getAll);
router.post('/', checkAuth, refuelController.create);
router.get('/:refuelId', checkAuth, refuelController.getOne);
router.get('/query/:userId', checkAuth, refuelController.getByUser);
router.patch('/:refuelId', checkAuth, refuelController.update);
router.delete('/:refuelId', checkAuth, refuelController.delete);

module.exports = router;