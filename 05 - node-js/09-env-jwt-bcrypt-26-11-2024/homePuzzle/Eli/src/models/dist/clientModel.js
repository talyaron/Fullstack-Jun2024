"use strict";
exports.__esModule = true;
exports.ClientModel = void 0;
var mongoose_1 = require("mongoose");
var ClientSchema = new mongoose_1.Schema({
    name: {
        require: true,
        type: String
    },
    phoneNumber: {
        require: true,
        type: String,
        unique: true
    },
    password: {
        require: true,
        type: String,
        unique: false
    }
});
exports.ClientModel = mongoose_1.model("Client", ClientSchema);
