"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setClients_1 = require("../controllers/users/setClients");
var router = express_1["default"].Router();
router.post("/add-client", setClients_1.addClient);
exports["default"] = router;
