"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    return User;
}());
exports.User = User;
exports.users = [];
