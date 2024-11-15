"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var checkScheduleCont_1 = require("../controllers/checkScheduleCont");
exports.router = express_1["default"].Router();
exports.router.post('/check-schedule', checkScheduleCont_1.checkSchedule);
exports["default"] = exports.router;
