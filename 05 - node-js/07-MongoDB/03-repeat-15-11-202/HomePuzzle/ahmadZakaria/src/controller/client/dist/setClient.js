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
exports.editClient = exports.deleteClient = exports.getClientById = exports.addClient = void 0;
var ClientsModel_1 = require("../../model/clients/ClientsModel");
function addClient(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, email, phone, result, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, name = _a.name, email = _a.email, phone = _a.phone;
                    return [4 /*yield*/, ClientsModel_1.ClientModel.create({
                            name: name, email: email, phone: phone
                        })];
                case 1:
                    result = _b.sent();
                    if (!result) {
                        return [2 /*return*/, res.status(400).send({})];
                    }
                    return [2 /*return*/, res.status(201).send({})];
                case 2:
                    error_1 = _b.sent();
                    console.error('Error in addClient: ', error_1);
                    if (error_1.code === 11000) {
                        return [2 /*return*/, res.status(400).send({})];
                    }
                    return [2 /*return*/, res.status(500).send({ error: "Internal server Error" })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.addClient = addClient;
function getClientById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, client, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, ClientsModel_1.ClientModel.findById(id)];
                case 1:
                    client = _a.sent();
                    if (!client) {
                        return [2 /*return*/, res.status(404).send({ error: "client not found" })];
                    }
                    return [2 /*return*/, res.status(200).send(client)];
                case 2:
                    error_2 = _a.sent();
                    console.error("Error in getClientById:", error_2);
                    return [2 /*return*/, res.status(500).send({ error: "internal Server Error" })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getClientById = getClientById;
function deleteClient(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, client, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.body.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    console.log("Deleting client with id: " + id);
                    return [4 /*yield*/, ClientsModel_1.ClientModel.findById(id)];
                case 2:
                    client = _a.sent();
                    if (!client) {
                        console.log("Client with id " + id + " not found");
                        return [2 /*return*/, res.status(401).json({ error: "Client not found " })];
                    }
                    return [4 /*yield*/, ClientsModel_1.ClientModel.findByIdAndDelete(id)];
                case 3:
                    _a.sent();
                    console.log("client with id " + id + " delete");
                    res.status(200).json({ error: "Client deleted successfully" });
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _a.sent();
                    console.error('Error deleting client:', error_3);
                    res.status(500).json({ error: "Intenal Server error" });
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.deleteClient = deleteClient;
function editClient(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, name, email, phone, updatedFields, updatedClient, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, id = _a.id, name = _a.name, email = _a.email, phone = _a.phone;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    console.log("Editing client with id: " + id);
                    updatedFields = {};
                    if (name !== undefined)
                        updatedFields.name = name;
                    if (email !== undefined)
                        updatedFields.email = email;
                    if (phone !== undefined)
                        updatedFields.phone = phone;
                    return [4 /*yield*/, ClientsModel_1.ClientModel.findByIdAndUpdate(id, updatedFields, { "new": true })];
                case 2:
                    updatedClient = _b.sent();
                    if (!updatedClient) {
                        console.log("Client with id " + id + " not found");
                        return [2 /*return*/, res.status(404).json({ error: "Client not found" })];
                    }
                    console.log("Client with id " + id + " update ");
                    res.status(200).json({ error: "Client updated successfully", client: updatedClient });
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _b.sent();
                    console.error('Client updating :', error_4);
                    res.status(500).json({ error: "Intenal Server error " });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.editClient = editClient;
