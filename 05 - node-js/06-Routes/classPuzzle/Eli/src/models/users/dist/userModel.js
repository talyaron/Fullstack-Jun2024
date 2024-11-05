"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
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
exports.User = User;
exports.users = [];
