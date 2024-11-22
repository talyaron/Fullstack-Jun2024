"use strict";
exports.__esModule = true;
exports.UserModel = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
//User Class
var User = /** @class */ (function () {
    function User(name, email, password, isAdmin, phoneNumber) {
        this.username = name;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
        this.phoneNumber = phoneNumber;
    }
    return User;
}());
//User Schema
exports.UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    }
});
//User Model 
exports.UserModel = mongoose_1.model('User', exports.UserSchema);
