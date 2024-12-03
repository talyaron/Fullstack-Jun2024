"use strict";
exports.__esModule = true;
exports.ServiceProviderModel = exports.ServiceProviderSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ServiceProviderSchema = new mongoose_1.Schema({
    id: String,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    serviceId: String
});
exports.ServiceProviderModel = mongoose_1.model("serviceProvider", exports.ServiceProviderSchema);
