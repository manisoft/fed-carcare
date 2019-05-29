const CarData = require('../model/car-data-m');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

exports.getAll = (req, res, next) => {
    CarData.find()
        .select('_id userId name model yearOfBuild odometer gasolineCapacity')
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
    const cardata = new CarData({
        _id: mongoose.Types.ObjectId(),
        userId: decoded.userId,
        name: req.body.name,
        model: req.body.model,
        yearOfBuild: req.body.yearOfBuild,
        odometer: req.body.odometer,
        gasolineCapacity: req.body.gasolineCapacity,
    });
    cardata.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                cardata: cardata
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
    const carId = req.params.carId;
    CarData.findById(carId)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({
                    message: 'There is no Car for this ID'
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
    CarData.find({ userId: decoded.userId })
        .select('_id name model yearOfBuild odometer gasolineCapacity')
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
    const carId = req.params.carId;
    const updateOperation = {};
    for (let ops of req.body) {
        updateOperation[ops.propName] = ops.value;
    }
    CarData.update({ _id: carId }, { $set: updateOperation })
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
    const carId = req.params.carId;
    CarData.remove({ _id: carId })
        .exec()
        .then(result => {

            res.status(200).json({
                message: 'The selected Car Data has been removed',
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