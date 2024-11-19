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
        unique: true
    },
    AdminPhone: { type: String,
        unique: true
    },
    AdminProfession: { type: String,
        unique: true
    },
    AdminRole: { type: String,
        unique: true
    },
    AdminYearOfBirth: Number,
    password: String
});
exports.AdminModel = mongoose_1.model("Admin", exports.AdminSchema);
