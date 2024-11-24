"use strict";
exports.__esModule = true;
exports.AppointmentsModel = exports.AppointmentsSchema = void 0;
var mongoose_1 = require("mongoose");
exports.AppointmentsSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'Client', required: true },
    serviceProviderId: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'ServiceProvider', required: true },
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        "default": 'pending'
    },
    service: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        "default": 0
    },
    review: {
        type: String
    }
});
exports.AppointmentsModel = mongoose_1["default"].model("Appointments", exports.AppointmentsSchema);
exports["default"] = exports.AppointmentsModel;
