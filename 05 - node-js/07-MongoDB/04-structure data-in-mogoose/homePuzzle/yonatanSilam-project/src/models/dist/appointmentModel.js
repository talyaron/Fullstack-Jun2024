"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var appointmentSchema = new mongoose_1.Schema({
    userID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'user', required: true },
    serviceProviderID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'serviceProvider', required: true },
    date: {
        type: Date,
        required: true
    },
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
    }
});
var appointmentModel = mongoose_1["default"].model('appointment', appointmentSchema);
exports["default"] = appointmentModel;
