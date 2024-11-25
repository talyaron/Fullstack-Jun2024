"use strict";
exports.__esModule = true;
exports.AppointmentModel = void 0;
var mongoose_1 = require("mongoose");
var appointmentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    inStock: { type: Boolean, "default": true }
});
exports.AppointmentModel = mongoose_1.model('Appointment', appointmentSchema);
exports["default"] = exports.AppointmentModel;
