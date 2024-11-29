"use strict";
exports.__esModule = true;
var express_1 = require("express");
var addSPCont_1 = require("../controllers/sPCont/addSPCont");
var getSPCont_1 = require("../controllers/sPCont/getSPCont");
var router = express_1["default"].Router();
router.post("/add-sP", addSPCont_1.addSP);
// router.get("/get-users", getUsers)
// router.get("/get-user", getUserById)
router.get("/get-sP-by-email", getSPCont_1.getSPByEmail);
// router.patch("/updateName", updateName)
// router.delete("/delete-user", deleteUserById)
exports["default"] = router;
