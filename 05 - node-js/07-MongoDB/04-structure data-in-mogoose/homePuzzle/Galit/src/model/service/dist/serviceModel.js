"use strict";
exports.__esModule = true;
exports.ServiceModel = exports.ServiceSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ServiceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: { type: String,
        required: true
    },
    price: { type: String,
        required: true
    }
});
exports.ServiceModel = mongoose_1.model("Service", exports.ServiceSchema);
