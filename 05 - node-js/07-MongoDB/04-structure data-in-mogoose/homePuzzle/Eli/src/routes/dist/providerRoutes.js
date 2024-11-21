"use strict";
exports.__esModule = true;
var express_1 = require("express");
var providerCreateCont_1 = require("../controllers/serviceProvider/providerCreateCont");
var providerGetAllCont_1 = require("../controllers/serviceProvider/providerGetAllCont");
var router = express_1["default"].Router();
router.post("/register-provider", providerCreateCont_1.registerProvider);
router.get("/get-providers", providerGetAllCont_1.getProviders);
exports["default"] = router;
