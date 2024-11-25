"use strict";
exports.__esModule = true;
exports.AppointmentModel = exports.AppointmentSchema = void 0;
var mongoose_1 = require("mongoose");
exports.AppointmentSchema = new mongoose_1.Schema({
    client: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    admin: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    service: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    date: { type: String, required: true },
    startTime: {
        type: Number,
        required: true
    },
    endTime: {
        type: Number,
        required: true
    },
    status: {
        type: String
    },
    rating: {
        type: String
    },
    review: {
        type: String
    }
});
exports.AppointmentModel = mongoose_1.model("Appointment", exports.AppointmentSchema);
