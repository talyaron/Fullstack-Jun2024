"use strict";
exports.__esModule = true;
exports.loginUser = void 0;
var userModel_1 = require("../../models/userModel");
function loginUser(req, res) {
    try {
        var _a = req.body, email_1 = _a.email, password = _a.password;
        var user = userModel_1.users.find(function (user) { return user.email === email_1; });
        console.log(user);
        if (!user) {
            return res.status(400).json({ message: 'You are not registered, please sign up.' });
        }
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid password' });
        }
        ;
    }
    catch (error) {
        console.error("Error in /api/login:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
exports.loginUser = loginUser;
