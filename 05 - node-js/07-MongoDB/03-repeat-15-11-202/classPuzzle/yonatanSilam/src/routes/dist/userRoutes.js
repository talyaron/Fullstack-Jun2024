"use strict";
exports.__esModule = true;
var express_1 = require("express");
var addUserCont_1 = require("../controllers/userCont/addUserCont");
var getUsersCont_1 = require("../controllers/userCont/getUsersCont");
var router = express_1["default"].Router();
router.post("/add-user", addUserCont_1.addUser);
router.get("/get-users", getUsersCont_1.getUsers);
exports["default"] = router;
