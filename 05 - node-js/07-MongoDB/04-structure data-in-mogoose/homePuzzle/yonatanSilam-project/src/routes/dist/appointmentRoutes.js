"use strict";
exports.__esModule = true;
var express_1 = require("express");
var addAppointmentCont_1 = require("../controllers/appointmentCont/addAppointmentCont");
var router = express_1["default"].Router();
router.post("/add-appointment", addAppointmentCont_1.addAppointment);
// router.get("/get-users", getUsers)
// router.get("/get-user", getUserById)
// router.get("/get-sP-by-email", getSPByEmail)
// router.patch("/updateName", updateName)
// router.delete("/delete-user", deleteUserById)
exports["default"] = router;
