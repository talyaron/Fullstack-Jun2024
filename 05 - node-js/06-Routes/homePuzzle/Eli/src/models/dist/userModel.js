"use strict";
exports.__esModule = true;
exports.loggedUsers = exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.id = crypto.randomUUID();
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.assignKey = function () {
        this.key = "key=" + crypto.randomUUID();
    };
    return User;
}());
exports.User = User;
exports.users = [];
exports.loggedUsers = [];
var admin = new User("admin", "admin", "admin");
var admin2 = new User("admin2", "admin2", "admin2");
exports.users.push(admin, admin2);
