"use strict";
exports.__esModule = true;
exports.AppointmentModel = exports.appointmentSchema = void 0;
var mongoose_1 = require("mongoose");
exports.appointmentSchema = new mongoose_1.Schema({
    client: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'Client', required: true },
    serviceProvider: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'ServiceProvider', required: true },
    date: { type: Date, required: true },
    startTime: { type: Number, required: true },
    endTime: { type: Number, required: true },
    status: { type: String, "enum": ['pending', 'confirmed', 'canceled'], "default": 'pending' },
    service: { type: String, required: true },
    price: { type: Number, required: true }
});
exports.AppointmentModel = mongoose_1.model('Appointment', exports.appointmentSchema);
