"use strict";
exports.__esModule = true;
exports.AppointmentModel = void 0;
var mongoose_1 = require("mongoose");
var AppointmentSchema = new mongoose_1.Schema({
    clientId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Client'
    },
    serviceProviderId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'serviceProvider'
    },
    startTime: { type: Number, required: true },
    endTime: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    inStock: { type: Boolean, "default": true }
});
exports.AppointmentModel = mongoose_1.model('Appointment', AppointmentSchema);
exports["default"] = exports.AppointmentModel;
