"use strict";
exports.__esModule = true;
exports.ServiceProviderModel = exports.ServiceProvider = void 0;
var mongoose_1 = require("mongoose");
exports.ServiceProvider = new mongoose_1.Schema({
    id: { type: String, required: true },
    serviceProviderName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    averageRating: {
        type: Number,
        "default": 0
    }
});
exports.ServiceProviderModel = mongoose_1.model("ServiceProvider", exports.ServiceProvider); // the connection to the DB collection
