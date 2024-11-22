"use strict";
exports.__esModule = true;
exports.ServiceModel = exports.ServiceSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ServiceSchema = new mongoose_1.Schema({
    admin: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: { type: Number,
        required: true
    },
    price: { type: Number,
        required: true
    }
});
exports.ServiceModel = mongoose_1.model("Service", exports.ServiceSchema);
