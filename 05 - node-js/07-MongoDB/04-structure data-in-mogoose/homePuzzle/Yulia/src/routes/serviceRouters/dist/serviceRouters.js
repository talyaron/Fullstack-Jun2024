"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setService_1 = require("../../controllers/services/setService");
var router = express_1["default"].Router();
// Route to create a service
router.post("/", setService_1.createService);
exports["default"] = router;
