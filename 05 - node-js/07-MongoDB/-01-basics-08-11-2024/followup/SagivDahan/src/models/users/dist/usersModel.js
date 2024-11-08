"use strict";
exports.__esModule = true;
exports.userModel = exports.UserSchema = exports.users = void 0;
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
// data model
exports.UserSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    password: String
});
// model to collection 
exports.userModel = mongoose_1.model("User", exports.UserSchema);
