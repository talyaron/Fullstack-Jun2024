"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setOrderCont_1 = require("../../controllers/orders/setOrderCont");
var getOrderCont_1 = require("../../controllers/orders/getOrderCont");
var router = express_1["default"].Router();
router.post("/add-order", setOrderCont_1.addOrder);
router.get("/get-order", getOrderCont_1.getOrderByClientId);
exports["default"] = router;
