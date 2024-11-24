"use strict";
exports.__esModule = true;
var express_1 = require("express");
var addService_1 = require("../controllers/service/addService");
var getServices_1 = require("../controllers/service/getServices");
var serviceRouter = express_1["default"].Router();
serviceRouter.post('/api/add-service', addService_1.addService);
serviceRouter.get('/api/get-services', getServices_1.getServices);
exports["default"] = serviceRouter;
