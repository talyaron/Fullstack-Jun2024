"use strict";
exports.__esModule = true;
exports.signupUser = void 0;
var userModel_1 = require("../../models/userModel");
var crypto_1 = require("crypto");
function signupUser(req, res) {
    try {
        var _a = req.body, userName = _a.userName, email = _a.email, password = _a.password, phoneNumber = _a.phoneNumber;
        if (!userName || !email || !password || !phoneNumber) {
            return res.status(400).json({ error: "All fields are required" });
        }
        var id = crypto_1.randomBytes(16).toString("hex");
        var posts = [];
        userModel_1.users.push({ userName: userName, id: id, email: email, password: password, phoneNumber: phoneNumber, posts: posts });
        console.log(userModel_1.users);
        res.status(201).json({ message: "User added successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "An error occurred while adding the user" });
    }
}
exports.signupUser = signupUser;
