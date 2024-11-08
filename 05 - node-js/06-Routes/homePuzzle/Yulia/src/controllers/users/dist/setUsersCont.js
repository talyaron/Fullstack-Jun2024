"use strict";
exports.__esModule = true;
exports.createUser = void 0;
var usersModel_1 = require("../../models/users/usersModel");
var crypto_1 = require("crypto");
function createUser(req, res) {
    var _a = req.body, name = _a.name, email = _a.email, password = _a.password;
    console.log(name, email, password);
    if (!name || !password) {
        return res
            .status(400)
            .json({ message: "Username and password are required" });
    }
    var newUser = {
        id: "Id-" + crypto_1["default"].randomUUID(),
        name: name,
        password: password,
        email: email
    };
    usersModel_1.users.push(newUser);
    res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
}
exports.createUser = createUser;
;
