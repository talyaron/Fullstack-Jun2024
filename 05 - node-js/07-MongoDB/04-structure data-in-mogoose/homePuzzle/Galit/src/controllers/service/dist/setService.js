"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.editService = exports.deleteService = exports.getAllServices = exports.getServiceById = exports.addService = void 0;
var serviceModel_1 = require("../../model/service/serviceModel");
function addService(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, admin, name, description, duration, price, result, error_1, duplicateField;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, admin = _a.admin, name = _a.name, description = _a.description, duration = _a.duration, price = _a.price;
                    if (!admin || !name || !description || !duration || !price) {
                        return [2 /*return*/, res.status(400).send({ error: "Missing required fields." })];
                    }
                    return [4 /*yield*/, serviceModel_1.ServiceModel.create({
                            admin: admin,
                            name: name,
                            description: description,
                            duration: duration,
                            price: price
                        })];
                case 1:
                    result = _b.sent();
                    if (!result) {
                        return [2 /*return*/, res.status(400).send({ error: "Failed to create service." })];
                    }
                    return [2 /*return*/, res.status(201).send({ message: "Service added successfully", service: result })];
                case 2:
                    error_1 = _b.sent();
                    console.error("Error in addService:", error_1);
                    if (error_1.code === 11000) {
                        duplicateField = Object.keys(error_1.keyValue)[0];
                        return [2 /*return*/, res.status(400).send({ error: duplicateField + " already exists." })];
                    }
                    return [2 /*return*/, res.status(500).send({ error: "Internal Server Error" })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.addService = addService;
function getServiceById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, Service, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, serviceModel_1.ServiceModel.findById(id).populate('admin')];
                case 1:
                    Service = _a.sent();
                    if (!Service) {
                        return [2 /*return*/, res.status(404).send({ error: "Service not found" })];
                    }
                    return [2 /*return*/, res.status(200).send(Service)];
                case 2:
                    error_2 = _a.sent();
                    console.error("Error in getServiceById:", error_2);
                    return [2 /*return*/, res.status(500).send({ error: "Internal Server Error" })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getServiceById = getServiceById;
function getAllServices(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var services, formattedServices, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, serviceModel_1.ServiceModel.find()
                            .populate({
                            path: 'admin',
                            select: 'AdminFirstName AdminLastName'
                        })];
                case 1:
                    services = _a.sent();
                    if (!services || services.length === 0) {
                        return [2 /*return*/, res.status(404).send({ error: "No services found" })];
                    }
                    formattedServices = services.map(function (service) {
                        var admin = service.admin
                            ? ((service.admin.AdminFirstName || 'Unknown') + " " + (service.admin.AdminLastName || '')).trim()
                            : 'Unknown Admin';
                        return __assign(__assign({}, service.toObject()), { admin: admin });
                    });
                    res.status(200).json(formattedServices);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    res.status(500).send({ error: "Server error" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAllServices = getAllServices;
function deleteService(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, service, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.body.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    console.log("Deleting service with id: " + id);
                    return [4 /*yield*/, serviceModel_1.ServiceModel.findById(id)];
                case 2:
                    service = _a.sent();
                    if (!service) {
                        console.log("Service with id " + id + " not found");
                        return [2 /*return*/, res.status(404).json({ error: "Service not found" })];
                    }
                    return [4 /*yield*/, serviceModel_1.ServiceModel.findByIdAndDelete(id)];
                case 3:
                    _a.sent();
                    console.log("Service with id " + id + " deleted");
                    return [2 /*return*/, res.status(200).json({ message: "Service deleted successfully" })];
                case 4:
                    error_4 = _a.sent();
                    console.error('Error deleting service:', error_4);
                    return [2 /*return*/, res.status(500).json({ error: "Internal server error" })];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.deleteService = deleteService;
function editService(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, admin, name, description, duration, price, updatedServiceFields, updatedService, error_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, id = _a.id, admin = _a.admin, name = _a.name, description = _a.description, duration = _a.duration, price = _a.price;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    console.log("Editing service with id: " + id);
                    updatedServiceFields = {};
                    if (admin !== undefined)
                        updatedServiceFields.admin = admin;
                    if (name !== undefined)
                        updatedServiceFields.name = name;
                    if (description !== undefined)
                        updatedServiceFields.description = description;
                    if (duration !== undefined)
                        updatedServiceFields.duration = duration;
                    if (price !== undefined)
                        updatedServiceFields.price = price;
                    return [4 /*yield*/, serviceModel_1.ServiceModel.findByIdAndUpdate(id, updatedServiceFields, { "new": true })];
                case 2:
                    updatedService = _b.sent();
                    if (!updatedService) {
                        console.log("Service with id " + id + " not found");
                        return [2 /*return*/, res.status(404).json({ error: "Service not found" })];
                    }
                    console.log("Service with id " + id + " updated");
                    return [2 /*return*/, res.status(200).json({ message: "Service updated successfully", service: updatedService })];
                case 3:
                    error_5 = _b.sent();
                    console.error('Error updating service:', error_5);
                    return [2 /*return*/, res.status(500).json({ error: "Internal server error" })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.editService = editService;
