"use strict";
exports.__esModule = true;
exports.getUser = void 0;
var usersModel_1 = require("../../models/users/usersModel");
exports.getUser = function (req, res) {
    var _a = req.body, name = _a.name, password = _a.password;
    var trimmedUsername = name.trim();
    var trimmedPassword = password.trim();
    console.log("Received username:", trimmedUsername);
    console.log("Received password:", trimmedPassword);
    console.log("Current users:", usersModel_1.users);
    var user = usersModel_1.users.find(function (u) { return u.name === name.trim() && u.password === password.trim(); });
    if (user) {
        res.status(200).json({ message: "Login successful", user: user, success: true });
    }
    else {
        res.status(401).json({ message: "Invalid credentials", success: false });
    }
};
