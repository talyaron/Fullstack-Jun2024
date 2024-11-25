"use strict";
exports.__esModule = true;
exports.AppointmentsModel = exports.appointmentsSchema = exports.appointments = void 0;
var mongoose_1 = require("mongoose");
var crypto_1 = require("crypto");
exports.appointments = [];
exports.appointmentsSchema = new mongoose_1.Schema({
    appointment_id: {
        type: String,
        required: true,
        unique: true,
        "default": crypto_1.randomUUID
    },
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true,
        validate: {
            validator: function (value) { return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value); },
            message: 'Invalid startTime format (use HH:mm)'
        }
    },
    endTime: {
        type: String,
        required: true,
        validate: {
            validator: function (value) { return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value); },
            message: 'Invalid endTime format (use HH:mm)'
        }
    },
    status: {
        type: String,
        "enum": ['PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELED'],
        "default": 'PENDING'
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
        type: String
    }
});
exports.AppointmentsModel = mongoose_1.model('Appointments', exports.appointmentsSchema);
