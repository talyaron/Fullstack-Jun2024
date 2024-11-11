"use strict";
exports.__esModule = true;
exports.createUser = void 0;
var usersModel_1 = require("../../models/users/usersModel");
var crypto_1 = require("crypto");
function createUser(req, res) {
    var _a = req.body, username = _a.username, email = _a.email, password = _a.password;
    console.log(username, email, password);
    if (!username || !password || !email) {
        return res
            .status(400)
            .json({ message: "Username, password and email are required" });
    }
    var newUser = {
        id: "Id-" + crypto_1["default"].randomUUID(),
        username: username,
        password: password,
        email: email
    };
    usersModel_1.users.push(newUser);
    console.log("New user:", newUser);
    res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
}
exports.createUser = createUser;
;
