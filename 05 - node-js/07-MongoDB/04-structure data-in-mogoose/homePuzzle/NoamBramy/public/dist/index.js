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
document.addEventListener("DOMContentLoaded", function () {
    loadServiceProviders();
    loadAppointments();
    loadClients();
});
var form = document.getElementById("appointmentForm");
function loadClients() {
    return __awaiter(this, void 0, void 0, function () {
        var response, clients, customerSelect_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/clients/get-client")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    clients = _a.sent();
                    customerSelect_1 = document.getElementById("customer");
                    customerSelect_1.innerHTML = '<option value="">Select a customer</option>';
                    clients.forEach(function (client) {
                        var option = document.createElement("option");
                        option.value = client._id;
                        option.textContent = client.firstName + " " + client.lastName;
                        customerSelect_1.appendChild(option);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error loading clients:", error_1);
                    alert("Failed to load clients");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function loadServiceProviders() {
    return __awaiter(this, void 0, void 0, function () {
        var response, providers, serviceProviderSelect_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/serviceprovider/get-service-provider")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    providers = _a.sent();
                    serviceProviderSelect_1 = document.getElementById("serviceProvider");
                    serviceProviderSelect_1.innerHTML = '<option value="">Select a provider</option>';
                    providers.forEach(function (provider) {
                        var option = document.createElement("option");
                        option.value = provider._id;
                        option.textContent = provider.name;
                        serviceProviderSelect_1.appendChild(option);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("Error loading service providers:", error_2);
                    alert("Failed to load service providers");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function loadAvailableSlots(serviceProvider, date) {
    return __awaiter(this, void 0, void 0, function () {
        var response, slots, timeSelect_1, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/appointments/slots?serviceProvider=" + serviceProvider + "&date=" + date)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    slots = _a.sent();
                    timeSelect_1 = document.getElementById("time");
                    timeSelect_1.innerHTML = '<option value="">Select a time slot</option>';
                    slots.forEach(function (slot) {
                        var option = document.createElement("option");
                        option.value = slot;
                        option.textContent = slot;
                        timeSelect_1.appendChild(option);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error("Error loading available slots:", error_3);
                    alert("Failed to load available slots");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function addAppointment(appointment) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/appointments/add-appointments", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(appointment)
                        })];
                case 1:
                    response = _a.sent();
                    if (response.ok) {
                        alert("Appointment booked successfully!");
                        loadAppointments();
                    }
                    else {
                        alert("Failed to book appointment.");
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error("Error booking appointment:", error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function loadAppointments() {
    return __awaiter(this, void 0, void 0, function () {
        var response, appointments, appointmentsList_1, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/appointments/get-appointments")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    appointments = _a.sent();
                    appointmentsList_1 = document.getElementById("appointmentsList");
                    if (!appointmentsList_1)
                        throw new Error("Appointments list not found");
                    appointmentsList_1.innerHTML = "";
                    appointments.forEach(function (appointment) {
                        var appointmentCard = "\n          <div class=\"appointment-card\">\n            <div class=\"appointment-header\">\n              <div class=\"appointment-client\">" + appointment.client.firstName + " " + appointment.client.lastName + "</div>\n              <div class=\"appointment-status\">" + appointment.status + "</div>\n            </div>\n            <div class=\"appointment-details\">\n              <div><strong>Date:</strong> " + appointment.date + "</div>\n              <div><strong>Time:</strong> " + appointment.startTime + " - " + appointment.endTime + "</div>\n\n            </div>\n            <div class=\"appointment-footer\">\n              <div class=\"appointment-service\">" + appointment.service + "</div>\n              <div class=\"appointment-price\">$" + appointment.price + "</div>\n            </div>\n          </div>\n        ";
                        appointmentsList_1.innerHTML += appointmentCard;
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.error("Error loading appointments:", error_5);
                    alert("Failed to load appointments");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var customerSelect = document.getElementById("customer");
    var serviceInput = document.getElementById("service");
    var timeSelect = document.getElementById("time");
    var serviceProviderSelect = document.getElementById("serviceProvider");
    var client = customerSelect.value;
    var serviceProvider = serviceProviderSelect.value;
    var date = document.getElementById("date").value;
    var time = timeSelect.value;
    if (!client || !serviceProvider || !date || !time || !serviceInput.value) {
        alert("Please fill in all fields.");
        return;
    }
    var appointment = {
        client: client,
        serviceProvider: serviceProvider,
        date: date,
        startTime: time,
        endTime: getEndTime(time),
        status: "pending",
        service: serviceInput.value,
        price: 50
    };
    addAppointment(appointment);
});
var serviceProviderSelect = document.getElementById("serviceProvider");
serviceProviderSelect.addEventListener("change", function () {
    var serviceProvider = serviceProviderSelect.value;
    var date = document.getElementById("date").value;
    if (serviceProvider && date) {
        loadAvailableSlots(serviceProvider, date);
    }
});
document.getElementById("date").addEventListener("change", function () {
    var serviceProvider = serviceProviderSelect.value;
    var date = document.getElementById("date").value;
    if (serviceProvider && date) {
        loadAvailableSlots(serviceProvider, date);
    }
});
function getEndTime(startTime) {
    var start = new Date("1970-01-01T" + startTime + ":00");
    start.setHours(start.getHours() + 1);
    return start.toISOString().substring(11, 16);
}
