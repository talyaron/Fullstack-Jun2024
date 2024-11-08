"use strict";
exports.__esModule = true;
exports.loginUser = void 0;
var userModel_1 = require("../../models/userModel");
function loginUser(req, res) {
    try {
        var _a = req.body, email_1 = _a.email, password = _a.password;
        var user = userModel_1.users.find(function (user) { return user.email === email_1; });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }
        if (user.password !== password) {
            return res.status(400).json({ error: "Incorrect password" });
        }
    }
    catch (error) {
        console.error("Error in /api/login:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
exports.loginUser = loginUser;
