const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./api/routes/users-r');
const cardataRoutes = require('./api/routes/car-data-r');
const serviceRoutes = require('./api/routes/service-r');
const refuelRoutes = require('./api/routes/refuel-r');

mongoose.connect('mongodb+srv://vit:'
    + process.env.MONGO_ATLAS_PW +
    '@vit-zgqlb.mongodb.net/CarCare?retryWrites=true',
    { useNewUrlParser: true }
);

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Method', 'GET,POST,PATCH,PUT,DELETE');
        return res.status(200).json({});
    }
    next();
});

app.use('/user', userRoutes);
app.use('/cardata', cardataRoutes);
app.use('/service', serviceRoutes);
app.use('/refuel', refuelRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;