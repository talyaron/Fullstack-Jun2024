"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setClients_1 = require("../../controllers/clients/setClients");
var router = express_1["default"].Router();
router.post("/add-client", setClients_1.addClient).post("/register", setClients_1.register).post("/login", setClients_1.login);
exports["default"] = router;
