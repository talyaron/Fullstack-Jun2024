"use strict";
exports.__esModule = true;
exports.ClientModel = exports.ClientSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ClientSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String,
        unique: true
    },
    yearOfBirth: Number,
    password: String
});
exports.ClientModel = mongoose_1.model("Client", exports.ClientSchema); // the connection to the DB collection
