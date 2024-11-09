"use strict";
// userController.ts
exports.__esModule = true;
exports.loginUser = exports.registerUser = void 0;
exports.registerUser = function (req, res) {
    var _a = req.body, fullName = _a.fullName, email = _a.email, password = _a.password;
    if (!fullName || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }
    console.log("User registered successfully");
    res.status(201).json({ message: "User registered successfully" });
};
exports.loginUser = function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }
    console.log("User logged in successfully");
    res.status(200).json({ message: "User logged in successfully" });
};
