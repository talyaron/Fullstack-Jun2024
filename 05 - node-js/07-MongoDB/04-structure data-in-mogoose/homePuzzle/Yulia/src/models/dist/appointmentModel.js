"use strict";
exports.__esModule = true;
exports.AppointmentModel = void 0;
var mongoose_1 = require("mongoose");
// Define the Appointment schema
var AppointmentSchema = new mongoose_1.Schema({
    client: {
        type: mongoose_1.Types.ObjectId,
        ref: "Client",
        required: true
    },
    serviceProvider: {
        type: mongoose_1.Types.ObjectId,
        ref: "ServiceProvider",
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
        "enum": ["pending", "confirmed", "canceled"],
        "default": "pending"
    },
    service: {
        type: mongoose_1.Types.ObjectId,
        ref: "Service",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    review: {
        type: String,
        maxlength: 500
    }
});
// Export the Appointment model
exports.AppointmentModel = mongoose_1.model("Appointment", AppointmentSchema);
