"use strict";
exports.__esModule = true;
var express_1 = require("express");
var getUsersCont_1 = require("../controllers/users/getUsersCont");
var setUsersCont_1 = require("../controllers/users/setUsersCont");
var userRouter = express_1["default"].Router();
userRouter.post("/login", getUsersCont_1.getUser);
userRouter.post("/register", setUsersCont_1.createUser);
exports["default"] = userRouter;
