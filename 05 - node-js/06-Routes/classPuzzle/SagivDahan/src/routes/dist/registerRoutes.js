"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userModel_1 = require("../models/userModel");
var router = express_1["default"].Router();
router.get('/register', function (req, res) {
    res.json({ user: userModel_1.user });
});
exports["default"] = router;
