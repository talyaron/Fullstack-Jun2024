"use strict";
exports.__esModule = true;
exports.userModel = exports.UserSchema = exports.users = void 0;
var mongoose_1 = require("mongoose");
exports.users = [];
exports.UserSchema = new mongoose_1.Schema({
    userName: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    phoneNumber: {
        type: 'string',
        required: true
    },
    id: {
        type: 'string',
        required: true
    }
});
exports.userModel = mongoose_1.model('User', exports.UserSchema);
