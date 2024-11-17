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
function handleAddAdmin(ev) {
    return __awaiter(this, void 0, Promise, function () {
        var formData, firstName, lastName, email, phone, profession, role, date, yearOfBirth, response, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    ev.preventDefault();
                    formData = new FormData(ev.target);
                    firstName = formData.get("firstName");
                    lastName = formData.get("lastName");
                    email = formData.get("email");
                    phone = formData.get("phone");
                    profession = formData.get("profession");
                    role = formData.get("role");
                    date = formData.get("date");
                    yearOfBirth = new Date(date).getFullYear();
                    return [4 /*yield*/, fetch("/api/admins/add-admin", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                phone: phone,
                                profession: profession,
                                role: role,
                                yearOfBirth: yearOfBirth
                            })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("Admin added:", data);
                    ev.target.reset();
                    return [4 /*yield*/, fetchAllAdmins()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4: throw new Error("Failed to add admin");
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
function fetchAllAdmins() {
    return __awaiter(this, void 0, Promise, function () {
        var response, admins, container, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/admins")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch admins");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    admins = _a.sent();
                    container = document.getElementById("admin-list");
                    if (container) {
                        container.innerHTML = "\n                <table>\n                    <thead>\n                        <tr>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Email</th>\n                            <th>Phone</th>\n                             <th>Profession</th>\n                              <th>Role</th>\n                            <th>Year of Birth</th>\n                            <th>Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        " + admins
                            .map(function (admin) { return "\n                                <tr id=\"admin-" + admin._id + "\">\n                                    <td id=\"firstName-" + admin._id + "\" onclick=\"handleEditAdminFirstName('" + admin._id + "')\">" + admin.firstName + "</td>\n                                    <td id=\"lastName-" + admin._id + "\" onclick=\"handleEditAdminLastName('" + admin._id + "')\">" + admin.lastName + "</td>\n                                    <td id=\"email-" + admin._id + "\" onclick=\"handleEditAdminEmail('" + admin._id + "')\">" + admin.email + "</td>\n                                    <td id=\"phone-" + admin._id + "\" onclick=\"handleEditAdminPhone('" + admin._id + "')\">" + admin.phone + "</td>\n                                    <td id=\"profession-" + admin._id + "\" onclick=\"handleEditAdminProfession('" + admin._id + "')\">" + admin.phone + "</td>\n                                    <td id=\"role-" + admin._id + "\" onclick=\"handleEditAdminRole('" + admin._id + "')\">" + admin.phone + "</td>\n                                    <td id=\"yearOfBirth-" + admin._id + "\" onclick=\"handleEditAdminYearOfBirth('" + admin._id + "')\">" + admin.yearOfBirth + "</td>\n                                    <td>\n                                        <button class=\"delete-btn\" onclick=\"handleDeleteAdmin('" + admin._id + "')\">Delete</button>\n                                        <button class=\"edit-btn\" onclick=\"handleEditAdminField('" + admin._id + "')\">Edit</button>\n\n                                        </td>\n                                </tr>\n                            "; })
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
function handleEditAdminField(id, fieldName) {
    var _this = this;
    var element = document.getElementById(fieldName + "-" + id);
    if (!element)
        return;
    if (fieldName === 'yearOfBirth') {
        var currentYear = element.innerText;
        var input_1 = document.createElement('input');
        input_1.type = 'number';
        input_1.value = currentYear || '';
        element.innerHTML = '';
        element.appendChild(input_1);
        input_1.focus();
        input_1.addEventListener('blur', function () { return __awaiter(_this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = parseInt(input_1.value, 10);
                        element.innerHTML = value.toString();
                        return [4 /*yield*/, updateAdmin(id, { yearOfBirth: value })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }, { once: true });
    }
    else {
        element.contentEditable = 'true';
        element.focus();
        element.addEventListener("blur", function () { return __awaiter(_this, void 0, void 0, function () {
            var value;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        value = element.innerText;
                        element.contentEditable = 'false';
                        return [4 /*yield*/, updateAdmin(id, (_a = {}, _a[fieldName] = value, _a))];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); }, { once: true });
    }
}
function handleEditAdminFirstName(id) {
    handleEditAdminField(id, 'firstName');
}
function handleEditAdminLastName(id) {
    handleEditAdminField(id, 'lastName');
}
function handleEditAdminEmail(id) {
    handleEditAdminField(id, 'email');
}
function handleEditAdminPhone(id) {
    handleEditAdminField(id, 'phone');
}
function handleEditAdminProfession(id) {
    handleEditAdminField(id, 'profession');
}
function handleEditAdminRole(id) {
    handleEditAdminField(id, 'role');
}
function handleEditAdminYearOfBirth(id) {
    handleEditAdminField(id, 'yearOfBirth');
}
function updateAdmin(id, updatedFields) {
    return __awaiter(this, void 0, void 0, function () {
        var response, errorMessage, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch("/api/admins/edit-admin", {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(__assign({ id: id }, updatedFields))
                        })];
                case 1:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.text()];
                case 2:
                    errorMessage = _a.sent();
                    console.error('Failed to update admin. Server response:', errorMessage);
                    throw new Error('Failed to update admin');
                case 3: return [4 /*yield*/, fetchAllAdmins()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    console.error('Error updating admin:', error_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function handleDeleteAdmin(id) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var response, errorMessage, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    console.log("Attempting to delete admin with id: " + id);
                    return [4 /*yield*/, fetch("/api/admins/delete-admin", {
                            method: 'DELETE',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ id: id })
                        })];
                case 1:
                    response = _b.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.text()];
                case 2:
                    errorMessage = _b.sent();
                    console.error('Failed to delete admin. Server response:', errorMessage);
                    throw new Error('Failed to delete admin');
                case 3:
                    (_a = document.getElementById("admin-" + id)) === null || _a === void 0 ? void 0 : _a.remove();
                    console.log("Admin with id " + id + " deleted from the DOM");
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _b.sent();
                    console.error('Error deleting admin:', error_3);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
window.onload = function () {
    fetchAllAdmins();
};
