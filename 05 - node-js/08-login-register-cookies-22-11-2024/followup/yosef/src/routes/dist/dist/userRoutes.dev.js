"use strict";

exports.__esModule = true;

var express_1 = require("express");

var logOffController_1 = require("../controllers/userController/logOffController");

var router = express_1["default"].Router();
router.post('/logOff', logOffController_1.logOff);
exports["default"] = router;