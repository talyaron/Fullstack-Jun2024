"use strict";
exports.__esModule = true;
exports.ClientModel = void 0;
var mongoose_1 = require("mongoose");
var clientSchema = new mongoose_1.Schema({
    name: {
        require: true,
        type: String
    },
    phoneNumber: {
        require: true,
        type: String
    },
    password: {
        require: true,
        type: String
    }, key: {
        require: false,
        type: String
    }
});
exports.ClientModel = mongoose_1.model("client", clientSchema);
