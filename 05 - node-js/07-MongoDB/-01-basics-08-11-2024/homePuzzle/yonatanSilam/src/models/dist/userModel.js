"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(username, phone, email, password) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.id = "id-" + crypto.randomUUID();
    }
    return User;
}());
exports.User = User;
