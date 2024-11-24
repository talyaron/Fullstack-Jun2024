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
        var form, formData, appointment, response, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    ev.preventDefault();
                    form = ev.target;
                    formData = new FormData(form);
                    appointment = {
                        client: formData.get("client"),
                        admin: formData.get("admin"),
                        service: formData.get("service"),
                        date: formData.get("date"),
                        startTime: formData.get("startTime"),
                        endTime: formData.get("endTime"),
                        status: formData.get("status"),
                        rating: formData.get("rating"),
                        review: formData.get("review")
                    };
                    return [4 /*yield*/, fetch("/api/appointments/add-appointment", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(appointment)
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Failed to add appointment");
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("Appointment added:", data);
                    form.reset();
                    return [4 /*yield*/, fetchAllAppointments()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.error("Error adding appointment:", err_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function fetchAllAppointments() {
    return __awaiter(this, void 0, Promise, function () {
        var _a, appointmentsResponse, adminsResponse, clientsResponse, servicesResponse, appointments, admins, clients, services, adminMap, clientMap, serviceMap, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, Promise.all([
                            fetch("/api/appointments"),
                            fetch("/api/admins"),
                            fetch("/api/clients"),
                            fetch("/api/services"),
                        ])];
                case 1:
                    _a = _b.sent(), appointmentsResponse = _a[0], adminsResponse = _a[1], clientsResponse = _a[2], servicesResponse = _a[3];
                    if (!appointmentsResponse.ok || !adminsResponse.ok || !clientsResponse.ok || !servicesResponse.ok) {
                        throw new Error("Failed to fetch required data");
                    }
                    return [4 /*yield*/, appointmentsResponse.json()];
                case 2:
                    appointments = _b.sent();
                    return [4 /*yield*/, adminsResponse.json()];
                case 3:
                    admins = _b.sent();
                    return [4 /*yield*/, clientsResponse.json()];
                case 4:
                    clients = _b.sent();
                    return [4 /*yield*/, servicesResponse.json()];
                case 5:
                    services = _b.sent();
                    adminMap = admins.reduce(function (map, admin) {
                        map[admin._id] = admin.AdminFirstName + " " + admin.AdminLastName;
                        return map;
                    }, {});
                    clientMap = clients.reduce(function (map, client) {
                        map[client._id] = client.firstName + " " + client.lastName;
                        return map;
                    }, {});
                    serviceMap = services.reduce(function (map, service) {
                        map[service._id] = service.name;
                        return map;
                    }, {});
                    renderAppointments(appointments, adminMap, clientMap, serviceMap);
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _b.sent();
                    console.error("Error fetching appointments:", error_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function renderAppointments(appointments, adminMap, clientMap, serviceMap) {
    var container = document.getElementById("appointment-list");
    if (!container)
        return;
    container.innerHTML = "\n        <table>\n            <thead>\n                <tr>\n                    <th>Client</th>\n                    <th>Admin</th>\n                    <th>Service</th>\n                    <th>Date</th>\n                    <th>Start Time</th>\n                    <th>End Time</th>\n                    <th>Status</th>\n                    <th>Rating</th>\n                    <th>Review</th>\n                    <th>Actions</th>\n                </tr>\n            </thead>\n            <tbody>\n                " + appointments
        .map(function (appointment) { return "\n                        <tr id=\"appointment-" + appointment._id + "\">\n                            <td>" + (clientMap[appointment.client] || "N/A") + "</td>\n                            <td>" + (adminMap[appointment.admin] || "N/A") + "</td>\n                            <td>" + (serviceMap[appointment.service] || "N/A") + "</td>\n                            <td>" + appointment.date + "</td>\n                            <td>" + appointment.startTime + "</td>\n                            <td>" + appointment.endTime + "</td>\n                            <td>" + appointment.status + "</td>\n                            <td>" + appointment.rating + "</td>\n                            <td>" + appointment.review + "</td>\n                            <td>\n                                <button class=\"edit-btn\" onclick=\"handleEditField('" + appointment._id + "')\">Edit</button>\n                                <button class=\"delete-btn\" onclick=\"handleDeleteAppointment('" + appointment._id + "')\">Delete</button>\n                            </td>\n                        </tr>\n                    "; })
        .join("") + "\n            </tbody>\n        </table>\n    ";
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
                    value = element.innerText.trim();
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
    return __awaiter(this, void 0, Promise, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/appointments/edit-appointment", {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(__assign({ id: id }, updatedFields))
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Failed to update appointment");
                    return [4 /*yield*/, fetchAllAppointments()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("Error updating appointment:", error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleDeleteAppointment(id) {
    var _a;
    return __awaiter(this, void 0, Promise, function () {
        var response, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("/api/appointments/delete-appointment", {
                            method: "DELETE",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ id: id })
                        })];
                case 1:
                    response = _b.sent();
                    if (!response.ok)
                        throw new Error("Failed to delete appointment");
                    (_a = document.getElementById("appointment-" + id)) === null || _a === void 0 ? void 0 : _a.remove();
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _b.sent();
                    console.error("Error deleting appointment:", error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function populateDropdowns() {
    return __awaiter(this, void 0, Promise, function () {
        var _a, clientsResponse, adminsResponse, servicesResponse, clients, admins, services, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, Promise.all([
                            fetch("/api/clients"),
                            fetch("/api/admins"),
                            fetch("/api/services"),
                        ])];
                case 1:
                    _a = _b.sent(), clientsResponse = _a[0], adminsResponse = _a[1], servicesResponse = _a[2];
                    if (!clientsResponse.ok || !adminsResponse.ok || !servicesResponse.ok) {
                        throw new Error("Failed to populate dropdowns");
                    }
                    return [4 /*yield*/, clientsResponse.json()];
                case 2:
                    clients = _b.sent();
                    return [4 /*yield*/, adminsResponse.json()];
                case 3:
                    admins = _b.sent();
                    return [4 /*yield*/, servicesResponse.json()];
                case 4:
                    services = _b.sent();
                    populateSelect("client", clients, "firstName");
                    populateSelect("admin", admins, "AdminFirstName");
                    populateSelect("service", services, "name");
                    return [3 /*break*/, 6];
                case 5:
                    error_4 = _b.sent();
                    console.error("Error populating dropdowns:", error_4);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function populateSelect(selectId, items, textField) {
    var select = document.getElementById(selectId);
    if (!select)
        return;
    items.forEach(function (item) {
        var option = document.createElement("option");
        option.value = item._id;
        option.textContent = item[textField];
        select.appendChild(option);
    });
}
window.onload = function () {
    populateDropdowns();
    fetchAllAppointments();
};
