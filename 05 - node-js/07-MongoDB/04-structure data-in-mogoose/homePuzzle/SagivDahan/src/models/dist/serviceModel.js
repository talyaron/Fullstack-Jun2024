"use strict";
exports.__esModule = true;
exports.ServiceModel = exports.ServiceSchema = exports.service = void 0;
var mongoose_1 = require("mongoose");
exports.service = [];
exports.ServiceSchema = new mongoose_1.Schema({
    id: {
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
    }
});
exports.ServiceModel = mongoose_1.model('Services', exports.ServiceSchema);
