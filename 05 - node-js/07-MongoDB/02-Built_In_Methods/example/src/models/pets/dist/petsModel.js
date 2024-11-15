"use strict";
exports.__esModule = true;
exports.PetModel = exports.PetSchema = void 0;
var mongoose_1 = require("mongoose");
exports.PetSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    imageURL: String
});
exports.PetModel = mongoose_1.model('Pet', exports.PetSchema);
