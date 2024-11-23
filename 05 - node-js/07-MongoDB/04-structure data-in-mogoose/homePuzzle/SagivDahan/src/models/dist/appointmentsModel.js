"use strict";
exports.__esModule = true;
exports.AppointmentsModel = exports.appointmentsSchema = exports.appointments = void 0;
var mongoose_1 = require("mongoose");
exports.appointments = [];
exports.appointmentsSchema = new mongoose_1.Schema({
    appointment_id: {
        type: String,
        required: true
    },
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
    status: {
        type: String,
        required: true
    },
    serviceId: {
        type: String,
        required: true
    },
    clientId: {
        type: String,
        required: true
    },
    providerId: {
        type: String,
        required: true
    }
});
exports.AppointmentsModel = mongoose_1.model('Appointments', exports.appointmentsSchema);
