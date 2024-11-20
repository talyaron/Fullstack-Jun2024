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
function handleAddAppointment(ev) {
    return __awaiter(this, void 0, Promise, function () {
        var formData, client, admin, service, date, time, status, price, rating, review, response, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    ev.preventDefault();
                    formData = new FormData(ev.target);
                    client = formData.get("client");
                    admin = formData.get("admin");
                    service = formData.get("service");
                    date = formData.get("date");
                    time = formData.get("time");
                    status = formData.get("status");
                    price = formData.get("price");
                    rating = formData.get("rating");
                    review = formData.get("review");
                    return [4 /*yield*/, fetch("/api/appointments/add-appointment", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                client: client,
                                admin: admin,
                                service: service,
                                date: date,
                                time: time,
                                status: status,
                                price: price,
                                rating: rating,
                                review: review
                            })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("Appointment added:", data);
                    ev.target.reset();
                    return [4 /*yield*/, fetchAllAppointments()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4: throw new Error("Failed to add appointment");
                case 5: return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function fetchAllAppointments() {
    return __awaiter(this, void 0, Promise, function () {
        var response, appointments, container, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/appointments")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch appointments");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    appointments = _a.sent();
                    container = document.getElementById("appointments-list");
                    if (container) {
                        container.innerHTML = "\n                <table>\n                    <thead>\n                        <tr>\n                            <th>Client</th>\n                            <th>Admin</th>\n                            <th>Service</th>\n                            <th>Date</th>\n                            <th>Time</th>\n                            <th>Status</th>\n                            <th>Price</th>\n                            <th>Rating</th>\n                            <th>Review</th>\n                            <th>Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        " + appointments
                            .map(function (appointment) { return "\n                                <tr id=\"appointment-" + appointment._id + "\">\n                                    <td id=\"client-" + appointment._id + "\" onclick=\"handleEditField('" + appointment._id + "', 'client')\">" + appointment.client + "</td>\n                                    <td id=\"admin-" + appointment._id + "\" onclick=\"handleEditField('" + appointment._id + "', 'admin')\">" + appointment.admin + "</td>\n                                    <td id=\"service-" + appointment._id + "\" onclick=\"handleEditField('" + appointment._id + "', 'service')\">" + appointment.service + "</td>\n                                    <td id=\"date-" + appointment._id + "\" onclick=\"handleEditField('" + appointment._id + "', 'date')\">" + appointment.date + "</td>\n                                    <td id=\"time-" + appointment._id + "\" onclick=\"handleEditField('" + appointment._id + "', 'time')\">" + appointment.time + "</td>\n                                    <td id=\"status-" + appointment._id + "\" onclick=\"handleEditField('" + appointment._id + "', 'status')\">" + appointment.status + "</td>\n                                    <td id=\"price-" + appointment._id + "\" onclick=\"handleEditField('" + appointment._id + "', 'price')\">" + appointment.price + "</td>\n                                    <td id=\"rating-" + appointment._id + "\" onclick=\"handleEditField('" + appointment._id + "', 'rating')\">" + appointment.rating + "</td>\n                                    <td id=\"review-" + appointment._id + "\" onclick=\"handleEditField('" + appointment._id + "', 'review')\">" + appointment.review + "</td>\n                                    <td>\n                                        <button class=\"delete-btn\" onclick=\"handleDeleteAppointment('" + appointment._id + "')\">Delete</button>\n                                        <button class=\"edit-btn\" onclick=\"handleEditField('" + appointment._id + "')\">Edit</button>\n                                    </td>\n                                </tr>\n                            "; })
                            .join("") + "\n                    </tbody>\n                </table>\n            ";
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleEditField(id, fieldName) {
    var _this = this;
    var element = document.getElementById(fieldName + "-" + id);
    if (!element)
        return;
    element.contentEditable = "true";
    element.focus();
    element.addEventListener("blur", function () { return __awaiter(_this, void 0, void 0, function () {
        var value;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    value = element.innerText;
                    element.contentEditable = "false";
                    return [4 /*yield*/, updateAppointment(id, (_a = {}, _a[fieldName] = value, _a))];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); }, { once: true });
}
function updateAppointment(id, updatedFields) {
    return __awaiter(this, void 0, void 0, function () {
        var response, errorMessage, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch("/api/appointments/edit-appointment", {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(__assign({ id: id }, updatedFields))
                        })];
                case 1:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.text()];
                case 2:
                    errorMessage = _a.sent();
                    console.error("Failed to update appointment. Server response:", errorMessage);
                    throw new Error("Failed to update appointment");
                case 3: return [4 /*yield*/, fetchAllAppointments()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    console.error("Error updating appointment:", error_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function handleDeleteAppointment(id) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var response, errorMessage, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    console.log("Attempting to delete appointment with id: " + id);
                    return [4 /*yield*/, fetch("/api/appointments/delete-appointment", {
                            method: "DELETE",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ id: id })
                        })];
                case 1:
                    response = _b.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.text()];
                case 2:
                    errorMessage = _b.sent();
                    console.error("Failed to delete appointment. Server response:", errorMessage);
                    throw new Error("Failed to delete appointment");
                case 3:
                    (_a = document.getElementById("appointment-" + id)) === null || _a === void 0 ? void 0 : _a.remove();
                    console.log("Appointment with id " + id + " deleted from the DOM");
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _b.sent();
                    console.error("Error deleting appointment:", error_3);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
window.onload = function () {
    fetchAllAppointments();
};
