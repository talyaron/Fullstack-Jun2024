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
var _this = this;
var form = document.getElementById("appointment-form");
var appointmentsContainer = document.getElementById("appointments");
// form event listener
form.addEventListener("submit", function (e) { return __awaiter(_this, void 0, void 0, function () {
    var formData, appointment, response, newAppointment, _a, _b, _c, error_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                e.preventDefault();
                formData = new FormData(form);
                appointment = {
                    client: formData.get("client-id"),
                    serviceProvider: formData.get("service-provider-id"),
                    service: formData.get("service-id"),
                    date: formData.get("date"),
                    startTime: formData.get("start-time"),
                    endTime: formData.get("end-time"),
                    price: formData.get("price")
                };
                _d.label = 1;
            case 1:
                _d.trys.push([1, 7, , 8]);
                return [4 /*yield*/, fetch("/api/appointments", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(appointment)
                    })];
            case 2:
                response = _d.sent();
                if (!response.ok) return [3 /*break*/, 4];
                return [4 /*yield*/, response.json()];
            case 3:
                newAppointment = _d.sent();
                renderAppointment(newAppointment);
                return [3 /*break*/, 6];
            case 4:
                _b = (_a = console).error;
                _c = ["Failed to create appointment:"];
                return [4 /*yield*/, response.text()];
            case 5:
                _b.apply(_a, _c.concat([_d.sent()]));
                _d.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                error_1 = _d.sent();
                console.error("Error:", error_1);
                return [3 /*break*/, 8];
            case 8:
                form.reset();
                return [2 /*return*/];
        }
    });
}); });
// render appointments
function renderAppointment(appointment) {
    var _this = this;
    var appointmentCard = document.createElement("div");
    appointmentCard.className = "appointments__card";
    appointmentCard.innerHTML = "\n    <p><strong>Client ID:</strong> " + appointment.client + "</p>\n    <p><strong>Service Provider ID:</strong> " + appointment.serviceProvider + "</p>\n    <p><strong>Service ID:</strong> " + appointment.service + "</p>\n    <p><strong>Date:</strong> " + appointment.date + "</p>\n    <p><strong>Start Time:</strong> " + appointment.startTime + "</p>\n    <p><strong>End Time:</strong> " + appointment.endTime + "</p>\n    <p><strong>Price:</strong> " + appointment.price + "</p>\n    <button class=\"appointments__card__button\" data-id=\"" + appointment._id + "\">Delete</button>\n  ";
    var deleteButton = appointmentCard.querySelector(".appointments__card__button");
    deleteButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleDeleteAppointment(appointment._id, appointmentCard)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    appointmentsContainer.appendChild(appointmentCard);
}
// fetch appointments
function handleDeleteAppointment(id, card) {
    return __awaiter(this, void 0, void 0, function () {
        var response, _a, _b, _c, error_2;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch("/api/appointments/" + id, {
                            method: "DELETE"
                        })];
                case 1:
                    response = _d.sent();
                    if (!response.ok) return [3 /*break*/, 2];
                    card.remove();
                    return [3 /*break*/, 4];
                case 2:
                    _b = (_a = console).error;
                    _c = ["Failed to delete appointment:"];
                    return [4 /*yield*/, response.text()];
                case 3:
                    _b.apply(_a, _c.concat([_d.sent()]));
                    _d.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_2 = _d.sent();
                    console.error("Error:", error_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
