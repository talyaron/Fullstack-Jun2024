"use strict";
exports.__esModule = true;
exports.svpModel = exports.ServiceProviderSchema = exports.users = void 0;
var mongoose_1 = require("mongoose");
exports.users = [];
exports.ServiceProviderSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true
    },
    services: {
        type: Array,
        required: true
    }
});
exports.svpModel = mongoose_1.model('ServiceProviders', exports.ServiceProviderSchema);
