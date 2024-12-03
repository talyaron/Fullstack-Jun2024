"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setAppointment_1 = require("../../controllers/appointments/setAppointment");
var router = express_1["default"].Router();
// Get all comments
// Create a new comment
router.post('/add-product', setAppointment_1.addProduct);
exports["default"] = router;
