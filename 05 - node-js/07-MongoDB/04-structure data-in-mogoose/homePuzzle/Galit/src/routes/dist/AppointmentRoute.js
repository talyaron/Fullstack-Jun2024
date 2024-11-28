"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setAppointment_1 = require("../controllers/appointment/setAppointment");
var getAppointments_1 = require("../controllers/appointment/getAppointments");
var router = express_1["default"].Router();
router.post("/add-appointment", setAppointment_1.addAppointment);
router.get("/:id", setAppointment_1.getAppointmentById);
router["delete"]("/delete-appointment", setAppointment_1.deleteAppointment);
router.put("/edit-appointment", setAppointment_1.editAppointment);
router.get("/all-appointments", getAppointments_1.getAllAppointments);
exports["default"] = router;
