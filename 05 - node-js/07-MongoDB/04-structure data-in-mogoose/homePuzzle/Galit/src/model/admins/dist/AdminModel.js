"use strict";
exports.__esModule = true;
exports.AdminModel = exports.AdminSchema = void 0;
var mongoose_1 = require("mongoose");
exports.AdminSchema = new mongoose_1.Schema({
    AdminFirstName: {
        type: String,
        required: true
    },
    AdminLastName: {
        type: String,
        required: true
    },
    AdminEmail: { type: String,
        required: true
    },
    AdminPhone: { type: String,
        required: true
    },
    AdminProfession: { type: String,
        required: true
    },
    AdminRole: { type: String,
        required: true
    },
    AdminYearOfBirth: Number
});
exports.AdminModel = mongoose_1.model("Admin", exports.AdminSchema);
