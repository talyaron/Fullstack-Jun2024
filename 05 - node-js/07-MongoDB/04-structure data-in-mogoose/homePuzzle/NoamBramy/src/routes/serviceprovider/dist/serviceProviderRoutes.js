"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var addSerivceProvider_1 = require("../../controllers/serviceprovider/addSerivceProvider");
var getServiceProvider_1 = require("../../controllers/serviceprovider/getServiceProvider");
router.post("/add-service-provider", addSerivceProvider_1.addServiceProvider);
router.get("/get-service-provider", getServiceProvider_1.getServiceProvider);
exports["default"] = router;
