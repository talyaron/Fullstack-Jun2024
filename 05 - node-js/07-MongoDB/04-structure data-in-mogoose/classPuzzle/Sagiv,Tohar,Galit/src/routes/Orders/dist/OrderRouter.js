"use strict";
exports.__esModule = true;
var express_1 = require("express");
var createOrder_1 = require("../../controllers/orders/createOrder");
var getAllOrders_1 = require("../../controllers/orders/getAllOrders");
var router = express_1["default"].Router();
router.post('/create-order', createOrder_1.createOrder);
router.get('/get-all-orders', getAllOrders_1.getAllOrders);
exports["default"] = router;
