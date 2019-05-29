const express = require('express');
const serviceController = require('../controller/service-c');
const checkAuth = require('../middleware/check-auth');
const checkPermission = require('../middleware/check-permission');
const checkServiceCenter = require('../middleware/check-serviceCenter-permit');


const router = express.Router();

router.get('/', checkAuth, checkPermission, serviceController.getAll);
//To Use this route need to put service center name after servicecenter/Bijan such as Bijan
router.get('/servicecenter/:seviceCenter', checkAuth, checkServiceCenter, serviceController.getAllForOne);
router.post('/', checkAuth, serviceController.create);
router.get('/:serviceId', checkAuth, serviceController.getOne);
//To Use this query route need to put dummy data after query/123 such as 123
router.get('/query/:userId', checkAuth, serviceController.getByUser);
router.patch('/:serviceId', checkAuth, serviceController.update);
router.delete('/:serviceId', checkAuth, serviceController.delete);

module.exports = router;