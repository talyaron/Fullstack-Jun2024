"use strict";
exports.__esModule = true;
exports.ServiceProviderModel = void 0;
var mongoose_1 = require("mongoose");
var serviceProviderSchema = new mongoose_1.Schema({
    name: {
        require: true,
        type: String
    },
    phoneNumber: {
        require: true,
        type: String
    },
    workDate: {
        require: true,
        type: String
    },
    password: {
        require: true,
        type: String
    },
    key: {
        require: false,
        type: String
    }
});
exports.ServiceProviderModel = mongoose_1.model("ServiceProvider", serviceProviderSchema);
