"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setAppointment_1 = require("../../controllers/appointments/setAppointment");
var getAllAppointments_1 = require("../../controllers/appointments/getAllAppointments");
var getAppointment_1 = require("../../controllers/appointments/getAppointment");
var updateAppointment_1 = require("../../controllers/appointments/updateAppointment");
var deleteAppointment_1 = require("../../controllers/appointments/deleteAppointment");
var router = express_1["default"].Router();
// Route to create an appointment
router.post("/", setAppointment_1.createAppointment);
// Route to get all appointments
router.get("/", getAllAppointments_1.getAllAppointments);
// Route to get an appointment by ID
router.get("/:id", getAppointment_1.getAppointmentById);
// Route to update an appointment by ID
router.patch("/:id", updateAppointment_1.updateAppointment);
// Route to delete an appointment by ID
router["delete"]("/:id", deleteAppointment_1.deleteAppointment);
exports["default"] = router;
