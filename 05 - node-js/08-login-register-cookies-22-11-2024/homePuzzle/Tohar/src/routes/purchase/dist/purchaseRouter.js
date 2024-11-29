"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setPurchase_1 = require("../../controllers/purchase/setPurchase");
var getPurchase_1 = require("../../controllers/purchase/getPurchase");
var router = express_1["default"].Router();
// Get all comments
router.post("/add-to-cart", setPurchase_1.addToCart);
router.post("/get-cart-products", getPurchase_1.getUserCartProducts);
router.post("/get-purchased-products", getPurchase_1.getUserPurchases);
exports["default"] = router;
