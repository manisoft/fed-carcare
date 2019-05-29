const mongoose = require('mongoose');

const refuelSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
    gasoline: { type: Number, required: true },
    price: { type: Number, required: true },
    odometer: { type: Number, required: true },
    date: { type: Date, required: true },
    isFull: { type: Boolean, required: true },
});

module.exports = mongoose.model('Refuel', refuelSchema);