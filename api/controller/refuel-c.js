const Refuel = require('../model/refuel-m');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

exports.getAll = (req, res, next) => {
    Refuel.find()
        .select('_id userId gasoline price odometer date isFull')
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
    const refuel = new Refuel({
        _id: mongoose.Types.ObjectId(),
        userId: decoded.userId,
        gasoline: req.body.gasoline,
        price: req.body.price,
        odometer: req.body.odometer,
        date: req.body.date,
        isFull: req.body.isFull
    });

    refuel.save()
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
    const refuelId = req.params.refuelId;
    Refuel.findById(refuelId)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({
                    message: 'There is no Refuel Data for this ID'
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
    userId = req.params.userId;
    Refuel.find({ userId: userId })
        .select('_id gasoline price odometer date isFull')
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
    const refuelId = req.params.refuelId;
    const updateOperation = {};
    for (let ops of req.body) {
        updateOperation[ops.propName] = ops.value;
    }
    Refuel.update({ _id: refuelId }, { $set: updateOperation })
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
    const refuelId = req.params.refuelId;
    Refuel.remove({ _id: refuelId })
        .exec()
        .then(result => {

            res.status(200).json({
                message: 'The selected Refuel Data has been removed',
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