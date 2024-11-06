"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userModel_1 = require("../models/userModel");
var router = express_1["default"].Router();
router.post('/register', function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    if (userModel_1.users.some(function (user) { return user.username === username; })) {
        return res.status(409).json({ message: 'Username already exists' });
    }
    userModel_1.users.push({ username: username, password: password });
    res.json({ message: 'Registered successfully' });
});
router.post('/login', function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    var user = userModel_1.users.find(function (u) { return u.username === username && u.password === password; });
    if (user) {
        res.json({ message: 'Login successful' });
    }
    else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});
router.post('/logout', function (req, res) {
    req.session.destroy(function () { return res.json({ message: 'Logged out successfully' }); });
});
exports["default"] = router;
