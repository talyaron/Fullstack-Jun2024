"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userModels_1 = require("../models/userModels");
var router = express_1["default"].Router();
router.get('/get-user', function (req, res) {
    res.json({ posts: userModels_1.posts });
});
exports["default"] = router;
