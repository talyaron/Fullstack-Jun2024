"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setUser_1 = require("../controllers/setUser");
var router = express_1["default"].Router();
router.post("/add-user", setUser_1.addUser);
exports["default"] = router;
