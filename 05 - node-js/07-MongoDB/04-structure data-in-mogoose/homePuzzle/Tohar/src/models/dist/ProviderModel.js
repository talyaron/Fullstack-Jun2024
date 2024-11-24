"use strict";
exports.__esModule = true;
exports.providerModel = exports.ProviderSchema = exports.providers = void 0;
var mongoose_1 = require("mongoose");
exports.providers = [];
exports.ProviderSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true
    },
    ServiceId: {
        type: [String],
        required: true
    }
});
exports.providerModel = mongoose_1.model('User', exports.ProviderSchema);
