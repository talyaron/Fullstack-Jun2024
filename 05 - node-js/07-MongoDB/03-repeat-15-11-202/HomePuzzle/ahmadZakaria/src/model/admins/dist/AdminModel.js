"use strict";
exports.__esModule = true;
exports.AdminModel = exports.AdminSchema = void 0;
var mongoose_1 = require("mongoose");
exports.AdminSchema = new mongoose_1.Schema({
    adminName: {
        type: String,
        required: true
    },
    adminEmial: {
        type: String,
        required: true
    },
    adminPhone: {
        type: String,
        required: true
    },
    adminProfession: {
        type: String,
        required: true
    },
    adminRole: {
        type: String,
        required: true
    },
    AdminYearOfBirth: Number,
    password: String
});
exports.AdminModel = mongoose_1.model("Admin", exports.AdminSchema);
