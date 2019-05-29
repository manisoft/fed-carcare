const Service = require('../model/service-m');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

exports.getAll = (req, res, next) => {
    Service.find()
        .select('_id userId engineOil oilFilter airFilter gearboxOil wiperFluid battery radiator price date nextOilReminder seviceCenter')
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.getAllForOne = (req, res, next) => {
    const seviceCenter = req.params.seviceCenter
    Service.find({ seviceCenter: seviceCenter })
        .select('_id userId engineOil oilFilter airFilter gearboxOil wiperFluid battery radiator price date nextOilReminder seviceCenter')
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.create = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.decode(token);
    const service = new Service({
        _id: mongoose.Types.ObjectId(),
        userId: decoded.userId,
        engineOil: req.body.engineOil,
        oilFilter: req.body.oilFilter,
        airFilter: req.body.airFilter,
        gearboxOil: req.body.gearboxOil,
        wiperFluid: req.body.wiperFluid,
        battery: req.body.battery,
        radiator: req.body.radiator,
        price: req.body.price,
        date: req.body.date,
        nextOilReminder: req.body.nextOilReminder,
        seviceCenter: req.body.seviceCenter
    });

    service.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                service: service
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

exports.getOne = (req, res, next) => {
    const serviceId = req.params.serviceId;
    Service.findById(serviceId)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({
                    message: 'There is no Service Data for this ID'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.getByUser = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.decode(token);
    Service.find({ userId: decoded.userId })
        .select('_id userId engineOil oilFilter airFilter gearboxOil wiperFluid battery radiator price date nextOilReminder seviceCenter')
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}


// For Patch We need an Array that contains objects of key and value pair [{"propName":"name", "value":"Kia"}]
exports.update = (req, res, next) => {
    const serviceId = req.params.serviceId;
    const updateOperation = {};
    for (let ops of req.body) {
        updateOperation[ops.propName] = ops.value;
    }
    Service.update({ _id: serviceId }, { $set: updateOperation })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}

exports.delete = (req, res, next) => {
    const serviceId = req.params.serviceId;
    Service.remove({ _id: serviceId })
        .exec()
        .then(result => {

            res.status(200).json({
                message: 'The selected Service Data has been removed',
                result: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}