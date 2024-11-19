"use strict";
exports.__esModule = true;
var express_1 = require("express");
var addOrderCont_1 = require("../../controllers/orders/addOrderCont");
var getOrderCont_1 = require("../../controllers/orders/getOrderCont");
var router = express_1["default"].Router();
router.post("/add-order", addOrderCont_1.addOrder);
router.get("/get-orders", getOrderCont_1.getOrders);
exports["default"] = router;
