"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
router.post("/add-client", addClient);
router.get("/get-user-details", getUserDetails);
exports["default"] = router;
