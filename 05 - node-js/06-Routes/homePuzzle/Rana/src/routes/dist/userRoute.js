"use strict";
// userRoute.ts
exports.__esModule = true;
var express = require("express");
var userController_1 = require("../controller/userController");
var router = express.Router();
router.post('/register', userController_1.registerUser);
router.post('/login', userController_1.loginUser);
exports["default"] = router;
