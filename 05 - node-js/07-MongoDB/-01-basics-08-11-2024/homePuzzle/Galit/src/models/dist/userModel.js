"use strict";
exports.__esModule = true;
exports.UserModel = exports.UserSchema = exports.users = exports.User = void 0;
var mongoose_1 = require("mongoose");
var crypto_1 = require("crypto");
var User = /** @class */ (function () {
    function User(username, email, password) {
        this.id = crypto_1["default"].randomUUID();
        this.username = username;
        this.email = email;
        this.password = password;
    }
    return User;
}());
exports.User = User;
exports.users = [];
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
    }
});
exports.UserModel = mongoose_1.model('User', exports.UserSchema);
