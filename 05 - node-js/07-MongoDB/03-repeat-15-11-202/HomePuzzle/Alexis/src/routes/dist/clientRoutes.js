"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setClients_1 = require("../controllers/setClients");
var router = express_1["default"].Router();
router.post("/add-client", setClients_1.addClient);
// router.get("/get-user-details", addClient)
exports["default"] = router;
