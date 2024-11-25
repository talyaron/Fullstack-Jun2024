"use strict";
exports.__esModule = true;
var express_1 = require("express");
var createAppointment_1 = require("../controllers/appointments/createAppointment");
var appointmentsRouter = express_1["default"].Router();
appointmentsRouter.post('/create', createAppointment_1.createAppointment);
exports["default"] = appointmentsRouter;
