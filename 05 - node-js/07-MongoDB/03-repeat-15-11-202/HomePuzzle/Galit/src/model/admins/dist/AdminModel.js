"use strict";
exports.__esModule = true;
exports.AdminModel = exports.AdminSchema = void 0;
var mongoose_1 = require("mongoose");
exports.AdminSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: { type: String,
        unique: true
    },
    phone: { type: String,
        unique: true
    },
    profession: { type: String,
        unique: true
    },
    role: { type: String,
        unique: true
    },
    yearOfBirth: Number,
    password: String
});
exports.AdminModel = mongoose_1.model("Admin", exports.AdminSchema);
