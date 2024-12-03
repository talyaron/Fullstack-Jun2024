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
function handleAddClient(event) {
    return __awaiter(this, void 0, void 0, function () {
        var form, formData, firstName, lastName, email, phone, date, yearOfBirth, response, clientData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    event.preventDefault();
                    form = event.target;
                    formData = new FormData(form);
                    firstName = formData.get("firstName");
                    lastName = formData.get("lastName");
                    email = formData.get("email");
                    phone = formData.get("phone");
                    date = formData.get("dateOfBirth");
                    yearOfBirth = new Date(date).getFullYear();
                    return [4 /*yield*/, fetch("/api/clients/add-client", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                phone: phone,
                                yearOfBirth: yearOfBirth
                            })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    clientData = _a.sent();
                    renderClientDetails(clientData);
                    form.reset();
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function renderClientDetails(client) {
    var clientsContainer = document.getElementById("clients");
    // Create ClientCard container
    var clientCard = document.createElement("div");
    clientCard.className = "clients__client-card";
    // Create ClientDetails
    var clientDetails = document.createElement("div");
    clientDetails.className = "client-card__details";
    clientDetails.innerHTML = "\n      <p><span class=\"client-card__label\">First Name:</span> <span class=\"client-card__value\">" + client.firstName + "</span></p>\n      <p><span class=\"client-card__label\">Last Name:</span> <span class=\"client-card__value\">" + client.lastName + "</span></p>\n      <p><span class=\"client-card__label\">Email:</span> <span class=\"client-card__value\">" + client.email + "</span></p>\n      <p><span class=\"client-card__label\">Phone:</span> <span class=\"client-card__value\">" + client.phone + "</span></p>\n      <p><span class=\"client-card__label\">Year of Birth:</span> <span class=\"client-card__value\">" + client.yearOfBirth + "</span></p>\n  ";
    // Create Buttons
    var buttonsContainer = document.createElement("div");
    buttonsContainer.className = "client-card__buttons";
    var updateButton = document.createElement("button");
    updateButton.className = "client-card__button client-card__button--update";
    updateButton.textContent = "Update";
    updateButton.addEventListener("click", function () {
        return handleUpdateClient(client, clientCard);
    });
    var deleteButton = document.createElement("button");
    deleteButton.className = "client-card__button client-card__button--delete";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        return handleDeleteClient(client._id, clientCard);
    });
    buttonsContainer.append(updateButton, deleteButton);
    // Append everything to the card
    clientCard.append(clientDetails, buttonsContainer);
    // Add card to clients container
    clientsContainer.appendChild(clientCard);
}
function handleDeleteClient(clientId, clientCard) {
    return __awaiter(this, void 0, void 0, function () {
        var response, _a, _b, _c, error_2;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch("/api/clients/delete-client", {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ _id: clientId })
                        })];
                case 1:
                    response = _d.sent();
                    if (!response.ok) return [3 /*break*/, 2];
                    console.log("Client with ID " + clientId + " deleted successfully.");
                    clientCard.remove(); // delete the card from the DOM
                    return [3 /*break*/, 4];
                case 2:
                    _b = (_a = console).error;
                    _c = ["Failed to delete client with ID " + clientId + ":"];
                    return [4 /*yield*/, response.text()];
                case 3:
                    _b.apply(_a, _c.concat([_d.sent()]));
                    _d.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_2 = _d.sent();
                    console.error("Error deleting client:", error_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function loadAllClients() {
    return __awaiter(this, void 0, void 0, function () {
        var response, clients, _a, _b, _c, error_3;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, fetch("/api/clients/get-all-clients", {
                            method: "GET"
                        })];
                case 1:
                    response = _d.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    clients = _d.sent();
                    clients.forEach(function (client) { return renderClientDetails(client); }); // render each client from the database to the DOM 
                    return [3 /*break*/, 5];
                case 3:
                    _b = (_a = console).error;
                    _c = ["Failed to fetch all clients:"];
                    return [4 /*yield*/, response.text()];
                case 4:
                    _b.apply(_a, _c.concat([_d.sent()]));
                    _d.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_3 = _d.sent();
                    console.error("Error loading all clients:", error_3);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function handleUpdateClient(client, clientCard) {
    return __awaiter(this, void 0, void 0, function () {
        var clientDetails, saveButton, buttonsContainer;
        var _this = this;
        return __generator(this, function (_a) {
            clientDetails = clientCard.querySelector(".client-card__details");
            // change the client details to input fields
            clientDetails.innerHTML = "\n    <label class=\"client-card__label\">First Name: \n      <input type=\"text\" name=\"firstName\" value=\"" + client.firstName + "\" class=\"client-card__input\" />\n    </label>\n    <label class=\"client-card__label\">Last Name: \n      <input type=\"text\" name=\"lastName\" value=\"" + client.lastName + "\" class=\"client-card__input\" />\n    </label>\n    <label class=\"client-card__label\">Email: \n      <input type=\"email\" name=\"email\" value=\"" + client.email + "\" class=\"client-card__input\" />\n    </label>\n    <label class=\"client-card__label\">Phone: \n      <input type=\"tel\" name=\"phone\" value=\"" + client.phone + "\" class=\"client-card__input\" />\n    </label>\n    <p class=\"client-card__label\">Year of Birth: \n      <span class=\"client-card__value\">" + client.yearOfBirth + "</span>\n    </p>\n  ";
            saveButton = document.createElement("button");
            saveButton.className = "client-card__button client-card__button--save";
            saveButton.textContent = "Save";
            // add event listener to the save button
            saveButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var updatedClient, response, _a, _b, _c;
                var _d, _e, _f, _g;
                return __generator(this, function (_h) {
                    switch (_h.label) {
                        case 0:
                            updatedClient = __assign(__assign({}, client), { firstName: ((_d = clientDetails.querySelector("input[name='firstName']")) === null || _d === void 0 ? void 0 : _d.value) || client.firstName, lastName: ((_e = clientDetails.querySelector("input[name='lastName']")) === null || _e === void 0 ? void 0 : _e.value) || client.lastName, email: ((_f = clientDetails.querySelector("input[name='email']")) === null || _f === void 0 ? void 0 : _f.value) || client.email, phone: ((_g = clientDetails.querySelector("input[name='phone']")) === null || _g === void 0 ? void 0 : _g.value) || client.phone });
                            return [4 /*yield*/, fetch("/api/clients/update-client/" + client._id, {
                                    method: "PATCH",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify(updatedClient)
                                })];
                        case 1:
                            response = _h.sent();
                            if (!response.ok) return [3 /*break*/, 2];
                            console.log("Client with ID " + client._id + " updated successfully.");
                            // update the client details in the DOM
                            clientDetails.innerHTML = "\n        <p class=\"client-card__label\">First Name: \n          <span class=\"client-card__value\">" + updatedClient.firstName + "</span>\n        </p>\n        <p class=\"client-card__label\">Last Name: \n          <span class=\"client-card__value\">" + updatedClient.lastName + "</span>\n        </p>\n        <p class=\"client-card__label\">Email: \n          <span class=\"client-card__value\">" + updatedClient.email + "</span>\n        </p>\n        <p class=\"client-card__label\">Phone: \n          <span class=\"client-card__value\">" + updatedClient.phone + "</span>\n        </p>\n        <p class=\"client-card__label\">Year of Birth: \n          <span class=\"client-card__value\">" + client.yearOfBirth + "</span>\n        </p>\n      ";
                            // remove the save button
                            saveButton.remove();
                            return [3 /*break*/, 4];
                        case 2:
                            _b = (_a = console).error;
                            _c = ["Failed to update client:"];
                            return [4 /*yield*/, response.text()];
                        case 3:
                            _b.apply(_a, _c.concat([_h.sent()]));
                            _h.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            buttonsContainer = clientCard.querySelector(".client-card__buttons");
            buttonsContainer.appendChild(saveButton);
            return [2 /*return*/];
        });
    });
}
document.addEventListener("DOMContentLoaded", function () {
    var header = document.createElement("div");
    header.className = "navigation";
    var buttons = [
        { text: "Go to Appointments", link: "/appointments" },
        { text: "Go to Services", link: "/services" },
        { text: "Go to Service Providers", link: "/service-providers" },
    ];
    buttons.forEach(function (buttonData) {
        var button = document.createElement("button");
        button.className = "navigation__button";
        button.textContent = buttonData.text;
        button.addEventListener("click", function () {
            window.location.href = buttonData.link; // Redirect to the respective page
        });
        header.appendChild(button);
    });
    // Add the navigation header to the page
    var root = document.body;
    root.insertBefore(header, root.firstChild); // Insert navigation at the top
});
document.addEventListener("DOMContentLoaded", function () {
    loadAllClients(); // load all clients when the page loads
});
