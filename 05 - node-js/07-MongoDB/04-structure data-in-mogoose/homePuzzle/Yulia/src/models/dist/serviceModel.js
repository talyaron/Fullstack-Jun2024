"use strict";
exports.__esModule = true;
exports.ServiceModel = void 0;
var mongoose_1 = require("mongoose");
// Define the Service schema
var ServiceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    description: {
        type: String,
        maxlength: 500
    },
    price: {
        type: Number,
        required: true
    }
});
// Export the Service model
exports.ServiceModel = mongoose_1.model("Service", ServiceSchema);
