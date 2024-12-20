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
var _this = this;
function handleAddService(ev) {
    return __awaiter(this, void 0, Promise, function () {
        var formData, admin, name, description, duration, price, response, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    ev.preventDefault();
                    formData = new FormData(ev.target);
                    admin = formData.get('admin');
                    name = formData.get('name');
                    description = formData.get('description');
                    duration = parseInt(formData.get('duration'), 10);
                    price = parseFloat(formData.get('price'));
                    return [4 /*yield*/, fetch("/api/services/add-service", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ admin: admin, name: name, description: description, duration: duration, price: price })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("Service added:", data);
                    ev.target.reset();
                    return [4 /*yield*/, fetchAllServices()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4: throw new Error("Failed to add service");
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
function fetchAllServices() {
    return __awaiter(this, void 0, Promise, function () {
        var servicesResponse, services, adminsResponse, admins, adminMap_1, container, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch("/api/services")];
                case 1:
                    servicesResponse = _a.sent();
                    if (!servicesResponse.ok) {
                        throw new Error("Failed to fetch services");
                    }
                    return [4 /*yield*/, servicesResponse.json()];
                case 2:
                    services = _a.sent();
                    return [4 /*yield*/, fetch("/api/admins")];
                case 3:
                    adminsResponse = _a.sent();
                    if (!adminsResponse.ok) {
                        throw new Error("Failed to fetch admins");
                    }
                    return [4 /*yield*/, adminsResponse.json()];
                case 4:
                    admins = _a.sent();
                    adminMap_1 = admins.reduce(function (map, admin) {
                        map[admin._id] = admin.AdminFirstName + " " + admin.AdminLastName;
                        return map;
                    }, {});
                    container = document.getElementById("service-list");
                    if (container) {
                        container.innerHTML = "\n                <table>\n                    <thead>\n                        <tr>\n                            <th>Service Provider</th>\n                            <th>Name</th>\n                            <th>Description</th>\n                            <th>Duration</th>\n                            <th>Price</th>\n                            <th>Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        " + services
                            .map(function (service) { return "\n                                <tr id=\"service-" + service._id + "\">\n                                    <td>" + (adminMap_1[service.admin] || 'N/A') + "</td>\n                                    <td id=\"name-" + service._id + "\" onclick=\"handleEditServiceField('" + service._id + "', 'name')\">" + service.name + "</td>\n                                    <td id=\"description-" + service._id + "\" onclick=\"handleEditServiceField('" + service._id + "', 'description')\">" + service.description + "</td>\n                                    <td id=\"duration-" + service._id + "\" onclick=\"handleEditServiceField('" + service._id + "', 'duration')\">" + service.duration + "</td>\n                                    <td id=\"price-" + service._id + "\" onclick=\"handleEditServiceField('" + service._id + "', 'price')\">" + service.price + "</td>\n                                    <td>\n                                        <button class=\"delete-btn\" onclick=\"handleDeleteService('" + service._id + "')\">Delete</button>\n                                        <button class=\"edit-btn\" onclick=\"handleEditService('" + service._id + "')\">Edit</button>\n                                    </td>\n                                </tr>\n                            "; })
                            .join("") + "\n                    </tbody>\n                </table>\n            ";
                    }
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error("Error fetching services:", error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function handleEditServiceField(id, fieldName) {
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
                    value = fieldName === "price" || fieldName === "duration"
                        ? parseFloat(element.innerText)
                        : element.innerText.trim();
                    element.contentEditable = "false";
                    return [4 /*yield*/, updateService(id, (_a = {}, _a[fieldName] = value, _a))];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); }, { once: true });
}
function updateService(id, updatedFields) {
    return __awaiter(this, void 0, void 0, function () {
        var response, errorMessage, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch("/api/services/edit-service", {
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
                    console.error("Failed to update service. Server response:", errorMessage);
                    throw new Error("Failed to update service");
                case 3: return [4 /*yield*/, fetchAllServices()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    console.error("Error updating service:", error_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function handleDeleteService(id) {
    var _a;
    return __awaiter(this, void 0, Promise, function () {
        var response, errorMessage, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    console.log("Attempting to delete service with id: " + id);
                    return [4 /*yield*/, fetch("/api/services/delete-service", {
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
                    console.error("Failed to delete service. Server response:", errorMessage);
                    throw new Error("Failed to delete service");
                case 3:
                    (_a = document.getElementById("service-" + id)) === null || _a === void 0 ? void 0 : _a.remove();
                    console.log("Service with id " + id + " deleted from the DOM");
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _b.sent();
                    console.error("Error deleting service:", error_3);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function serviceDropdowns() {
    return __awaiter(this, void 0, Promise, function () {
        var adminsResponse, admins, adminSelect_1, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/api/admins')];
                case 1:
                    adminsResponse = _a.sent();
                    return [4 /*yield*/, adminsResponse.json()];
                case 2:
                    admins = _a.sent();
                    adminSelect_1 = document.getElementById('admin');
                    admins.forEach(function (admin) {
                        var option = document.createElement('option');
                        option.value = admin._id;
                        option.textContent = admin.AdminFirstName + " " + admin.AdminLastName;
                        adminSelect_1.appendChild(option);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error("Error fetching admins:", error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
window.onload = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fetchAllServices();
                return [4 /*yield*/, serviceDropdowns()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
