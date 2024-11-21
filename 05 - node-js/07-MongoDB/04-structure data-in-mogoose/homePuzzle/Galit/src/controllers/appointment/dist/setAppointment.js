"use strict";
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
exports.editAppointment = exports.deleteAppointment = exports.getAppointmentById = exports.addAppointment = void 0;
var appointmentModel_1 = require("../../model/appointment/appointmentModel");
function addAppointment(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, client, admin, service, date, time, status, rating, review, result, error_1, duplicateField;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, client = _a.client, admin = _a.admin, service = _a.service, date = _a.date, time = _a.time, status = _a.status, rating = _a.rating, review = _a.review;
                    if (!client || !service || !admin || !date || !time) {
                        return [2 /*return*/, res.status(400).send({ error: "Missing required fields." })];
                    }
                    return [4 /*yield*/, appointmentModel_1.AppointmentModel.create({
                            client: client,
                            admin: admin,
                            service: service,
                            date: date,
                            time: time,
                            status: status,
                            rating: rating,
                            review: review
                        })];
                case 1:
                    result = _b.sent();
                    if (!result) {
                        return [2 /*return*/, res.status(400).send({ error: "Failed to create appointment." })];
                    }
                    return [2 /*return*/, res.status(201).send({ message: "Appointment added successfully", appointment: result })];
                case 2:
                    error_1 = _b.sent();
                    console.error("Error in addAppointment:", error_1);
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
exports.addAppointment = addAppointment;
function getAppointmentById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, Appointment, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, appointmentModel_1.AppointmentModel.findById(id)];
                case 1:
                    Appointment = _a.sent();
                    if (!Appointment) {
                        return [2 /*return*/, res.status(404).send({ error: "Appointment not found" })];
                    }
                    return [2 /*return*/, res.status(200).send(Appointment)];
                case 2:
                    error_2 = _a.sent();
                    console.error("Error in getAppointmentById:", error_2);
                    return [2 /*return*/, res.status(500).send({ error: "Internal Server Error" })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAppointmentById = getAppointmentById;
function deleteAppointment(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, Appointment, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.body.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    console.log("Deleting appointment with id: " + id);
                    return [4 /*yield*/, appointmentModel_1.AppointmentModel.findById(id)];
                case 2:
                    Appointment = _a.sent();
                    if (!Appointment) {
                        console.log("Appointment with id " + id + " not found");
                        return [2 /*return*/, res.status(401).json({ error: "Appointment not found" })];
                    }
                    return [4 /*yield*/, appointmentModel_1.AppointmentModel.findByIdAndDelete(id)];
                case 3:
                    _a.sent();
                    console.log("Appointment with id " + id + " deleted");
                    res.status(200).json({ message: "Appointment deleted successfully" });
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _a.sent();
                    console.error('Error deleting appointment:', error_3);
                    res.status(500).json({ error: "Internal server error" });
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.deleteAppointment = deleteAppointment;
function editAppointment(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, client, admin, service, date, time, status, rating, review, updatedAppointmentFields, updatedAppointment, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, id = _a.id, client = _a.client, admin = _a.admin, service = _a.service, date = _a.date, time = _a.time, status = _a.status, rating = _a.rating, review = _a.review;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    console.log("Editing appointment with id: " + id);
                    updatedAppointmentFields = {};
                    if (client !== undefined)
                        updatedAppointmentFields.client = client;
                    if (admin !== undefined)
                        updatedAppointmentFields.admin = admin;
                    if (service !== undefined)
                        updatedAppointmentFields.service = service;
                    if (date !== undefined)
                        updatedAppointmentFields.date = date;
                    if (time !== undefined)
                        updatedAppointmentFields.time = time;
                    if (status !== undefined)
                        updatedAppointmentFields.status = status;
                    if (rating !== undefined)
                        updatedAppointmentFields.rating = rating;
                    if (review !== undefined)
                        updatedAppointmentFields.review = review;
                    return [4 /*yield*/, appointmentModel_1.AppointmentModel.findByIdAndUpdate(id, updatedAppointmentFields, { "new": true })];
                case 2:
                    updatedAppointment = _b.sent();
                    if (!updatedAppointment) {
                        console.log("Appointment with id " + id + " not found");
                        return [2 /*return*/, res.status(404).json({ error: "Appointment not found" })];
                    }
                    console.log("Appointment with id " + id + " updated");
                    res.status(200).json({ message: "Appointment updated successfully", Appointment: updatedAppointment });
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _b.sent();
                    console.error('Error updating appointment:', error_4);
                    res.status(500).json({ error: "Internal server error" });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.editAppointment = editAppointment;
