"use strict";
exports.__esModule = true;
exports.ServiceProviderModel = void 0;
var mongoose_1 = require("mongoose");
var ServiceProviderSchema = new mongoose_1.Schema({
    name: { type: String, required: true }
});
exports.ServiceProviderModel = mongoose_1.model("ServiceProvider", ServiceProviderSchema);
