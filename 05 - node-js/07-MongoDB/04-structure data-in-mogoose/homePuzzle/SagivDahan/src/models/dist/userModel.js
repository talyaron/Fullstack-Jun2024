"use strict";
exports.__esModule = true;
exports.userModel = exports.UserSchema = exports.users = void 0;
var mongoose_1 = require("mongoose");
exports.users = [];
exports.UserSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true
    },
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
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    isProvider: {
        type: Boolean
    },
    services: {
        type: Array
    }
});
exports.userModel = mongoose_1.model('User', exports.UserSchema);
