"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setClients_1 = require("../controllers/setClients");
var getUserData_1 = require("../controllers/getUserData");
var router = express_1["default"].Router();
router.post("/add-client", setClients_1.addClient);
router.get("/get-user-details", getUserData_1.getUserDetails);
exports["default"] = router;
