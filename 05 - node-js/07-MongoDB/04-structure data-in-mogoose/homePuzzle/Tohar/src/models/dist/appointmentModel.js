"use strict";
exports.__esModule = true;
exports.AppointmentModel = exports.AppointmentSchema = exports.appointments = void 0;
var mongoose_1 = require("mongoose");
exports.appointments = [];
exports.AppointmentSchema = new mongoose_1.Schema({
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    serviceId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    providerId: {
        type: String,
        required: true
    }
});
exports.AppointmentModel = mongoose_1.model('Appointment', exports.AppointmentSchema);
