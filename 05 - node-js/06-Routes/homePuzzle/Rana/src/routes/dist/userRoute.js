"use strict";
// userRoute.ts
exports.__esModule = true;
var express_1 = require("express");
var userController_1 = require("../controller/userController");
var router = express_1.Router();
router.post('/api/register', userController_1.registerUser);
router.post('/api/login', userController_1.loginUser);
exports["default"] = router;
