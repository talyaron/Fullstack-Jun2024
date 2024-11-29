"use strict";
exports.__esModule = true;
exports.serviceProviderModel = exports.ServiceProviderSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ServiceProviderSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
    imageUrl: String,
    yearOfBirth: Number,
    password: {
        type: String,
        required: true
    }
});
exports.serviceProviderModel = mongoose_1.model("serviceProvider", exports.ServiceProviderSchema);
