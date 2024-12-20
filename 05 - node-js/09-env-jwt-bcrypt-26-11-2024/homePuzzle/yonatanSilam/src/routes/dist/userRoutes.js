"use strict";
exports.__esModule = true;
var express_1 = require("express");
var addUserCont_1 = require("../controllers/userCont/addUserCont");
var getUsersCont_1 = require("../controllers/userCont/getUsersCont");
var getUserCont_1 = require("../controllers/userCont/getUserCont");
var updateNameCont_1 = require("../controllers/userCont/updateNameCont");
var deleteUserCont_1 = require("../controllers/userCont/deleteUserCont");
var loginCont_1 = require("../controllers/userCont/loginCont");
var router = express_1["default"].Router();
router.post("/add-user", addUserCont_1.addUser);
router.get("/get-users", getUsersCont_1.getUsers);
router.get("/get-user", getUserCont_1.getUserById);
router.get("/get-user-by-email", getUserCont_1.getUserByEmail);
router.patch("/updateName", updateNameCont_1.updateName);
router["delete"]("/delete-user", deleteUserCont_1.deleteUserById);
router.post("/login", loginCont_1.login);
exports["default"] = router;
