"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setServiceProviders_1 = require("../../controllers/servicePrividers/setServiceProviders");
var router = express_1["default"].Router();
router.post("/add-service", setServiceProviders_1.addServiceProvider);
exports["default"] = router;
