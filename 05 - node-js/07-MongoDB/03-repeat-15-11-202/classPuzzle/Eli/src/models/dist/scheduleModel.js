"use strict";
exports.__esModule = true;
exports.ScheduleModel = exports.ScheduleSchema = void 0;
var mongoose_1 = require("mongoose");
var clientModel_1 = require("./clientModel");
var serviceProviderModel_1 = require("./serviceProviderModel");
exports.ScheduleSchema = new mongoose_1.Schema({
    client: {
        require: true,
        type: clientModel_1.ClientModel
    },
    serviceProvider: {
        require: true,
        type: serviceProviderModel_1.ServiceProviderModel
    },
    Date: {
        require: true,
        type: Date
    }
});
exports.ScheduleModel = mongoose_1.model("Schedule", exports.ScheduleSchema);
