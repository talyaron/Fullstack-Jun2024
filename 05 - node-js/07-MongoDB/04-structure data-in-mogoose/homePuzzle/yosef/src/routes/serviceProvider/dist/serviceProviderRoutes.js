"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setServiceProviderCont_1 = require("../../controllers/serviceProvider/setServiceProviderCont");
var router = express_1["default"].Router();
router.post("/add-service-provider", setServiceProviderCont_1.addServiceProvider);
exports["default"] = router;
