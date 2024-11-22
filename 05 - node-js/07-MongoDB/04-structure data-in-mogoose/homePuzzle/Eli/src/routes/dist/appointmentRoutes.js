"use strict";
exports.__esModule = true;
var express_1 = require("express");
var appointmentCreateCont_1 = require("../controllers/appointmentControllers/appointmentCreateCont");
var router = express_1["default"].Router();
router.post("/create-appointment", appointmentCreateCont_1.createAppointment);
exports["default"] = router;
