"use strict";
exports.__esModule = true;
exports.clientRouter = void 0;
var deleteClient_1 = require("../../controllers/clients/deleteClient");
var getClients_1 = require("../../controllers/clients/getClients");
var setClients_1 = require("../../controllers/clients/setClients");
var express_1 = require("express");
var updateClient_1 = require("../../controllers/clients/updateClient");
var clientRouter = express_1["default"].Router();
exports.clientRouter = clientRouter;
clientRouter.post("/add-client", setClients_1.addClient);
clientRouter.get("/get-client", getClients_1.getClient);
clientRouter.get("/get-all-clients", getClients_1.getAllClients);
clientRouter["delete"]("/delete-client", deleteClient_1.deleteClient);
clientRouter.patch("/update-client/:id", updateClient_1.updateClient);
