"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setPurchase_1 = require("../../controllers/purchase/setPurchase");
var router = express_1["default"].Router();
// Get all comments
router.post("/add-to-cart", setPurchase_1.addToCart);
exports["default"] = router;
