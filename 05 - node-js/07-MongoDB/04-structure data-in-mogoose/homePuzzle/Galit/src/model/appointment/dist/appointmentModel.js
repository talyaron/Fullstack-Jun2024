"use strict";
exports.__esModule = true;
exports.AppointmentModel = exports.AppointmentSchema = void 0;
var mongoose_1 = require("mongoose");
exports.AppointmentSchema = new mongoose_1.Schema({
    client: {
        type: String,
        required: true
    },
    admin: {
        type: String,
        required: true
    },
    service: { type: String, required: true },
    date: { type: String, required: true },
    time: {
        type: String,
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
