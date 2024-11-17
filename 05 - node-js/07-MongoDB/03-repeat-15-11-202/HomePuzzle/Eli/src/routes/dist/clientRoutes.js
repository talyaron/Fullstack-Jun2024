"use strict";
exports.__esModule = true;
var express_1 = require("express");
var clientRegCont_1 = require("../controllers/clientControllers/clientRegCont");
var router = express_1["default"].Router();
router.post("/register-client", clientRegCont_1.registerClient);
exports["default"] = router;
