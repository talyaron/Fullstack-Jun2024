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
exports.addAppointment = void 0;
var appointmentModel_1 = require("../../model/appointment/appointmentModel");
exports.addAppointment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, client, serviceProvider, date, startTime, endTime, status, service, price, existingAppointment, newAppointment, savedAppointment, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, client = _a.client, serviceProvider = _a.serviceProvider, date = _a.date, startTime = _a.startTime, endTime = _a.endTime, status = _a.status, service = _a.service, price = _a.price;
                return [4 /*yield*/, appointmentModel_1.AppointmentModel.findOne({
                        serviceProvider: serviceProvider,
                        date: date,
                        startTime: startTime
                    })];
            case 1:
                existingAppointment = _b.sent();
                if (existingAppointment) {
                    return [2 /*return*/, res.status(400).json({ message: 'The service provider is not available at this time' })];
                }
                newAppointment = new appointmentModel_1.AppointmentModel({
                    client: client,
                    serviceProvider: serviceProvider,
                    date: date,
                    startTime: startTime,
                    endTime: endTime,
                    status: status || 'pending',
                    service: service,
                    price: price
                });
                return [4 /*yield*/, newAppointment.save()];
            case 2:
                savedAppointment = _b.sent();
                res.status(201).json({ message: 'Appointment created successfully', appointment: savedAppointment });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.log('Error creating appointment:', error_1.message);
                res.status(500).json({ message: 'Failed to create appointment' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
