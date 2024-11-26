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
function handleAddClient(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var formData, firstName, lastName, email, phone, date, yearOfBirth, response, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    ev.preventDefault();
                    formData = new FormData(ev.target);
                    firstName = formData.get("firstName");
                    lastName = formData.get("lastName");
                    email = formData.get("email");
                    phone = formData.get("phone");
                    date = formData.get("date");
                    yearOfBirth = new Date(date).getFullYear();
                    return [4 /*yield*/, fetch("/api/clients/add-client", {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
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
                    data = _a.sent();
                    renderToTheDom(data._id, firstName, lastName, email, phone, yearOfBirth);
                    console.log(data);
                    console.log("_idClient is:");
                    console.log(data._id);
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function renderToTheDom(_id, firstName, lastName, email, phone, yearOfBirth) {
    try {
        var container = document.getElementById("show");
        if (!container)
            return console.error("Container not found");
        var div = document.createElement("div");
        div.className = "client";
        div.id = "client-" + _id;
        div.innerHTML = "\n        <h2>" + firstName + " " + lastName + "</h2>\n        <p>Email: " + email + "</p>\n        <p>Phone: " + phone + "</p>\n        <p>Year of Birth: " + yearOfBirth + "</p>\n        <button data-id=\"" + _id + "\" onclick=\"handleDeleteClient(event)\">Delete</button>\n        <button data-id=\"" + _id + "\" onclick=\"handleEditClient(event)\">Edit</button>\n        <p>--------------------------------------------------------------</p>\n        <h1>\n    ";
        container.appendChild(div);
    }
    catch (err) {
        console.error(err);
    }
}
function handleShowClients() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, fetch("/api/clients/get-all-clients")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    data.clients.forEach(function (client) {
                        renderToTheDom(client._id, client.firstName, client.lastName, client.email, client.phone, client.yearOfBirth);
                    });
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    err_2 = _a.sent();
                    console.error(err_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function handleDeleteClient(event) {
    return __awaiter(this, void 0, void 0, function () {
        var id, response, divToRemove, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = event.target.getAttribute("data-id");
                    console.log(id);
                    return [4 /*yield*/, fetch("/api/clients/delete-client/" + id, {
                            method: 'DELETE'
                        })];
                case 1:
                    response = _a.sent();
                    if (response.ok) {
                        console.log("Client deleted successfully");
                        divToRemove = document.getElementById("client-" + id);
                        if (divToRemove)
                            divToRemove.remove();
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    console.error(err_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleEditClient(event) {
    return __awaiter(this, void 0, void 0, function () {
        var id, div, firstName, lastName, email, phone, yearOfBirth, response, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = event.target.getAttribute("data-id");
                    console.log(id);
                    div = document.getElementById("client-" + id);
                    if (div) {
                        firstName = prompt("Enter new first name:");
                        lastName = prompt("Enter new last name:");
                        email = prompt("Enter new email:");
                        phone = prompt("Enter new phone:");
                        yearOfBirth = prompt("Enter new year of birth:");
                    }
                    return [4 /*yield*/, fetch("/api/clients/edit-client/" + id, {
                            method: 'PATCH',
                            headers: { 'Content-Type': 'application/json' },
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
                    return [3 /*break*/, 3];
                case 2:
                    err_4 = _a.sent();
                    console.error(err_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
handleShowClients();
