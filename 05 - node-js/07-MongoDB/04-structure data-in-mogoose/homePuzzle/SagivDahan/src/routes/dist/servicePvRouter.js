"use strict";
exports.__esModule = true;
var express_1 = require("express");
var getMyAppointments_1 = require("../controllers/providers/getMyAppointments");
var spvRouter = express_1["default"].Router();
spvRouter.get('/appointments/:providerId', getMyAppointments_1.getMyAppointments);
exports["default"] = spvRouter;
