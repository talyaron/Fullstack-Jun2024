"use strict";
exports.__esModule = true;
exports.userModel = exports.UserSchema = exports.users = void 0;
var mongoose_1 = require("mongoose");
var User = /** @class */ (function () {
    // appointement: [];
    function User(firstName, lastName, email, password, phoneNumber, isAdmin) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.isAdmin = isAdmin;
    }
    return User;
}());
;
exports.users = [];
exports.UserSchema = new mongoose_1.Schema({
    userFirstName: {
        type: 'string',
        required: true
    },
    userLastName: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    isAdmin: {
        type: 'boolean',
        required: true
    }
});
exports.userModel = mongoose_1.model('User', exports.UserSchema);
