"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userController_1 = require("../controller/userController");
var router = express_1["default"].Router();
router.post('/register', userController_1.register);
router.post('/login', userController_1.login);
router.post('/logout', userController_1.logout);
exports["default"] = router;
