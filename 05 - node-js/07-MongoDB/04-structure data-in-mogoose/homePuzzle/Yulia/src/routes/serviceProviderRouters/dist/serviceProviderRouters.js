"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setServiceProvider_1 = require("../../controllers/serviceProviders/setServiceProvider");
var router = express_1["default"].Router();
// Route to create a service provider
router.post("/", setServiceProvider_1.createServiceProvider);
exports["default"] = router;
