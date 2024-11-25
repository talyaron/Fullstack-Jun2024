"use strict";
exports.__esModule = true;
var express_1 = require("express");
var loginUser_1 = require("../controllers/user/loginUser");
var signupUser_1 = require("../controllers/user/signupUser");
var userExists_1 = require("../controllers/user/userExists");
var getUser_1 = require("../controllers/user/getUser");
var updateUser_1 = require("../controllers/user/updateUser");
var removeUser_1 = require("../controllers/user/removeUser");
var userRouter = express_1["default"].Router();
userRouter.post('/signup-user', signupUser_1.signupUser);
userRouter.post('/login', loginUser_1.loginUser);
userRouter.post('/get-user', getUser_1.getUser);
userRouter.patch('/edit-user', updateUser_1.updateUser);
userRouter["delete"]('/delete-user', removeUser_1.removeUser);
userRouter.get('/userExists', userExists_1.userExists);
exports["default"] = userRouter;
