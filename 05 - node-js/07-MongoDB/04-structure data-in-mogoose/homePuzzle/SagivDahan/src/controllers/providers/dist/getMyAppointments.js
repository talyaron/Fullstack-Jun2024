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
exports.getMyAppointments = void 0;
var userModel_1 = require("../../models/userModel");
var appointmentsModel_1 = require("../../models/appointmentsModel");
exports.getMyAppointments = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user, appointments, i, currentAppointment, startTime, endTime, nextAppointment, nextStartTime, nextEndTime, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.params.userId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, userModel_1.userModel.findById(userId)];
            case 2:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, res.status(403).json({ message: 'User is not found.' })];
                }
                return [4 /*yield*/, appointmentsModel_1.AppointmentsModel.find({ userId: userId })];
            case 3:
                appointments = _a.sent();
                if (appointments.length === 0) {
                    return [2 /*return*/, res.status(404).json({ message: 'No appointments found for this provider.' })];
                }
                //check when the appointments
                for (i = 0; i < appointments.length; i++) {
                    currentAppointment = appointments[i];
                    startTime = currentAppointment.startTime, endTime = currentAppointment.endTime;
                    // check if startime isnt small then endtime.
                    if (new Date(startTime) >= new Date(endTime)) {
                        return [2 /*return*/, res.status(400).json({
                                message: "Invalid time range in appointment " + currentAppointment._id + ": startTime must be before endTime."
                            })];
                    }
                    //check if there is more appointment
                    if (i + 1 < appointments.length) {
                        nextAppointment = appointments[i + 1];
                        nextStartTime = nextAppointment.startTime, nextEndTime = nextAppointment.endTime;
                        //check if the currectly endtime is smaller then next appointment startime
                        if (new Date(endTime) > new Date(nextStartTime)) {
                            return [2 /*return*/, res.status(400).json({
                                    message: "Invalid scheduling: appointment " + currentAppointment._id + " overlaps with appointment " + nextAppointment._id + "."
                                })];
                        }
                        //check if next startime appointment is bigger then endtime of currectly appointment
                        if (new Date(nextStartTime) <= new Date(endTime)) {
                            return [2 /*return*/, res.status(400).json({
                                    message: "Invalid scheduling: appointment " + nextAppointment._id + " starts too early after appointment " + currentAppointment._id + "."
                                })];
                        }
                    }
                }
                res.status(200).json(appointments);
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                res.status(500).json({ message: 'Error fetching appointments', error: error_1 });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
