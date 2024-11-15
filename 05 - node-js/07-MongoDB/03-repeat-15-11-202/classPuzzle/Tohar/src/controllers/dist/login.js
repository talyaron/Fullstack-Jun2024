"use strict";
exports.__esModule = true;
exports.login = void 0;
var usersModel_1 = require("../../models/usersModel");
function login(req, res) {
    try {
        var _a = req.body, email_1 = _a.email, password = _a.password;
        var user = usersModel_1.users.find(function (user) { return user.email === email_1; });
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
exports.login = login;
