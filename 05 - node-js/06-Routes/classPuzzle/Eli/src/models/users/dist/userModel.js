"use strict";
exports.__esModule = true;
exports.UserModel = exports.UserSchema = exports.users = void 0;
var mongoose_1 = require("mongoose");
defau;
var User = /** @class */ (function () {
    function User(name, email, password, id) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id;
    }
    User.prototype.login = function () {
        console.log("User logged in successfully!");
    };
    return User;
}());
exports.users = [];
exports.UserSchema = new exports.UserSchema({
    name: {
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
