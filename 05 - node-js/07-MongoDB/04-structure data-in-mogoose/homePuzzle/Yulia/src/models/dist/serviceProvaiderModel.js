"use strict";
exports.__esModule = true;
exports.ServiceProviderModel = void 0;
var mongoose_1 = require("mongoose");
// Define the ServiceProvider schema
var ServiceProviderSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    services: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Service"
        },
    ]
});
// Export the ServiceProvider model
exports.ServiceProviderModel = mongoose_1.model("ServiceProvider", ServiceProviderSchema);
