"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setClients_1 = require("../../controllers/clients/setClients");
var getClients_1 = require("../../controllers/clients/getClients");
var router = express_1["default"].Router();
router.post("/add-client", setClients_1.addClient);
router.get('/get-client', getClients_1.getClients);
exports["default"] = router;
