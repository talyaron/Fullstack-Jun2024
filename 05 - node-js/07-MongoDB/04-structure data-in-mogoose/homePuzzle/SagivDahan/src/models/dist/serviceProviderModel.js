"use strict";
exports.__esModule = true;
exports.serviceProviderModel = exports.ServiceProvider = exports.serviceProvider = void 0;
var mongoose_1 = require("mongoose");
exports.serviceProvider = [];
exports.ServiceProvider = new mongoose_1.Schema({
    id: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    }
});
exports.serviceProviderModel = mongoose_1.model('SpUsers', exports.ServiceProvider);
