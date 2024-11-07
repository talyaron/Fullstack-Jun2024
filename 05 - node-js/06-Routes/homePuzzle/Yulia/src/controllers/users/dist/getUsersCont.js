"use strict";
exports.__esModule = true;
exports.getUser = void 0;
var usersModel_1 = require("../../models/users/usersModel");
exports.getUser = function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    var user = usersModel_1.users.find(function (u) { return u.username === username && u.password === password; });
    if (user) {
        res.status(200).json({ message: "Login successful", user: user });
    }
    else {
        res.status(401).json({ message: "Invalid credentials" });
    }
};
