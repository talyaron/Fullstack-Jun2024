"use strict";
exports.__esModule = true;
exports.addServiceToProvider = void 0;
var ProviderModel_1 = require("../../models/ProviderModel");
var ServiceModel_1 = require("../../models/ServiceModel");
function addServiceToProvider(req, res) {
    var _a = req.body, id = _a.id, serviceId = _a.serviceId;
    ProviderModel_1.providerModel.findOne({ id: id }).then(function (provider) {
        if (provider) {
            ServiceModel_1.serviceModel.findOne({ id: serviceId }).then(function (service) {
                if (service) {
                    var serviceToAdd = provider.ServiceId.push(serviceId);
                    res.json(serviceToAdd);
                }
            });
        }
    })["catch"](function (err) {
    });
}
exports.addServiceToProvider = addServiceToProvider;
;
