"use strict";
exports.__esModule = true;
exports.userExists = void 0;
var userModel_1 = require("../../models/userModel");
function userExists(req, res) {
    var email = req.query.email;
    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }
    var userExists = userModel_1.users.some(function (user) { return user.email === email; });
    console.log('userExists', userExists);
    res.json({ exists: userExists });
}
exports.userExists = userExists;
