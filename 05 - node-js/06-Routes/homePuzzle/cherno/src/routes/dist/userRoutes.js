"use strict";
exports.__esModule = true;
var express_1 = require("express");
var loginUser_1 = require("../controllers/user/loginUser");
var createUser_1 = require("../controllers/user/createUser");
var router = express_1["default"].Router();
router.post('/register', createUser_1.registerUser);
router.post('/login', loginUser_1.loginUser);
exports["default"] = router;
