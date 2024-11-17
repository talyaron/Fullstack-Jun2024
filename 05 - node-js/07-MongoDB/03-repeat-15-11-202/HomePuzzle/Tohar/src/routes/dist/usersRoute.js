"use strict";
exports.__esModule = true;
var express_1 = require("express");
var loginUser_1 = require("../controllers/loginUser");
var signupUser_1 = require("../controllers/signupUser");
var router = express_1["default"].Router();
router.post('/register', signupUser_1.signupUser);
router.post('/login', loginUser_1.loginUser);
exports["default"] = router;
