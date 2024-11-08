"use strict";
exports.__esModule = true;
exports.UserModel = exports.UserSchema = exports.users = void 0;
var mongoose_1 = require("mongoose");
var User = /** @class */ (function () {
    function User(name, email, password) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.email = email;
        this.password = password;
    }
    return User;
}());
exports["default"] = User;
exports.users = [];
//data structure
exports.UserSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    password: String
});
// model => collection
exports.UserModel = mongoose_1.model('User', exports.UserSchema); // collection name is 'users' by default
