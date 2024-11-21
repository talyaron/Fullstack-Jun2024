"use strict";
exports.__esModule = true;
exports.AppointmentModel = exports.AppointmentSchema = void 0;
var mongoose_1 = require("mongoose");
exports.AppointmentSchema = new mongoose_1.Schema({
    client: {
        type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'Client', required: true
    },
    serviceProvider: {
        type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'ServiceProvider', required: true
    },
    date: {
        require: true,
        type: String
    },
    startTime: {
        require: true,
        type: String
    },
    endTime: {
        require: true,
        type: String
    },
    status: {
        require: true,
        type: String
    },
    price: {
        require: true,
        type: Number
    },
    rating: {
        type: String
    },
    review: {
        type: String
    }
});
exports.AppointmentModel = mongoose_1.model("appointment", exports.AppointmentSchema);
// - client: reference to the client
// - serviceProvider: reference to the service provider
// - date: date of the appointment
// - startTime: time of the appointment
// - endTime: end time of the appointment
// - status: status of the appointment (pending, confirmed, canceled)
// - service: reference to the service
// - price: price of the service
// - rating: rating of the service provider by the client
// - review: review of the service provider by the client
