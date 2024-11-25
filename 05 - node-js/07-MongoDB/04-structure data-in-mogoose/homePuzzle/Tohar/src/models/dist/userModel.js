"use strict";
exports.__esModule = true;
exports.userModel = exports.UserSchema = exports.users = void 0;
var mongoose_1 = require("mongoose");
exports.users = [];
exports.UserSchema = new mongoose_1.Schema({
    userName: {
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
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    isProvider: {
        type: Boolean,
        required: true
    }
});
exports.userModel = mongoose_1.model('User', exports.UserSchema);
