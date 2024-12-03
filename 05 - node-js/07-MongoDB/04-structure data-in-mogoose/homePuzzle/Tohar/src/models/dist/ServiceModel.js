"use strict";
exports.__esModule = true;
exports.serviceModel = exports.ServiceSchema = exports.services = void 0;
var mongoose_1 = require("mongoose");
exports.services = [];
exports.ServiceSchema = new mongoose_1.Schema({
    serviceId: {
        type: String,
        required: true
    },
    serviceName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
});
exports.serviceModel = mongoose_1.model('User', exports.ServiceSchema);
