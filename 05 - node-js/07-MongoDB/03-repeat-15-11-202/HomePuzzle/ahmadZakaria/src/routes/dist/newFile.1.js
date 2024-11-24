"use strict";
exports.__esModule = true;
var clientController_1 = require("../controller/clientController");
var clientsRouter_1 = require("./clientsRouter");
clientsRouter_1.router.get("/:id", clientController_1.getClient);
