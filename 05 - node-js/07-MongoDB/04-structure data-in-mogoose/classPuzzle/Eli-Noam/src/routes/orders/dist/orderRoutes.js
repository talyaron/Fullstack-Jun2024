"use strict";
exports.__esModule = true;
var express_1 = require("express");
var addOrderCont_1 = require("../../controllers/orders/addOrderCont");
var router = express_1["default"].Router();
router.post("/add-order", addOrderCont_1.addOrder);
exports["default"] = router;
