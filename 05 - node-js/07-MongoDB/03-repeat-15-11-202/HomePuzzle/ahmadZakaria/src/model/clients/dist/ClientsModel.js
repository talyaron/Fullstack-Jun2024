"use strict";
exports.__esModule = true;
exports.ClientModel = exports.ClientSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ClientSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});
exports.ClientModel = mongoose_1.model("Client", exports.ClientSchema);
