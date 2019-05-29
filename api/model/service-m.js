const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
    engineOil: { type: Boolean, default: false },
    oilFilter: { type: Boolean, default: false },
    airFilter: { type: Boolean, default: false },
    gearboxOil: { type: Boolean, default: false },
    wiperFluid: { type: Boolean, default: false },
    battery: { type: Boolean, default: false },
    radiator: { type: Boolean, default: false },
    price: { type: Number, required: true },
    date: { type: Date, required: true },
    nextOilReminder: { type: Number, required: true },
    seviceCenter: { type: String, required: true }
});

module.exports = mongoose.model('Service', serviceSchema);