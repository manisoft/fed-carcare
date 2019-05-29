const mongoose = require('mongoose');

const carDataSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
    name: { type: String, required: true },
    model: { type: String, required: true },
    yearOfBuild: { type: Number, required: true },
    odometer: { type: Number, required: true },
    gasolineCapacity: { type: Number, required: true }
});

module.exports = mongoose.model('CarData', carDataSchema);