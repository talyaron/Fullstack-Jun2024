"use strict";
exports.__esModule = true;
exports.UserModel = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
var usersServer = /** @class */ (function () {
    function usersServer(name, phone, email, password) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }
    return usersServer;
}());
exports["default"] = usersServer;
exports.UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    }
});
exports.UserModel = mongoose_1.model('Users', exports.UserSchema);
