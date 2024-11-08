"use strict";
exports.__esModule = true;
exports.users = void 0;
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
