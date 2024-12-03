"use strict";
exports.__esModule = true;
var express_1 = require("express");
var registerController_1 = require("../controllers/userController/registerController");
var loginController_1 = require("../controllers/userController/loginController");
var router = express_1["default"].Router();
router.post('/register', registerController_1.registerUser);
router.post('/login', loginController_1.loginUser);
exports["default"] = router;
