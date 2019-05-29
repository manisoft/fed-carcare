const Users = require('../model/users-m');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getAll = (req, res, next) => {
    Users.find()
        .select('_id email')
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
    Users.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'Email Exists!'
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new Users({
                            _id: mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash,
                            role: req.body.role
                        });
                        user.save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: 'User Created'
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                })
                            });
                    }
                });
            }
        });
}

exports.login = (req, res, next) => {
    Users.findOne({ email: req.body.email })
        .exec()
        .then(person => {
            if (!person) {
                return res.status(401).json({
                    message: 'Auth Failed'
                })
            } else {
                bcrypt.compare(req.body.password, person.password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: 'Auth Failed'
                        })
                    }
                    if (result) {
                        const token = jwt.sign({
                            email: person.email,
                            userId: person._id,
                            role: person.role
                        },
                            process.env.JWT_KEY,
                            {
                                expiresIn: "12h"
                            }
                        );
                        return res.status(200).json({
                            message: 'Auth Successful',
                            token: token
                        })
                    }
                    return res.status(401).json({
                        message: 'Auth Failed'
                    })
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
}

exports.getOne = (req, res, next) => {
    const userId = req.params.userId;
    Users.findById(userId)
        .select('_id email role')
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({
                    message: 'There is no User for this ID'
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
// For Patch We need an Array that contains objects of key and value pair [{"propName":"name", "value":"Kia"}]
exports.update = (req, res, next) => {
    const userId = req.params.userId;
    const updateOperation = {};
    for (let ops of req.body) {
        updateOperation[ops.propName] = ops.value;
    }
    Users.update({ _id: userId }, { $set: updateOperation })
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
    const userId = req.params.userId;
    Users.remove({ _id: userId })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'The selected User Data has been removed',
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
