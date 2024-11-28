"use strict";
exports.__esModule = true;
exports.PurchaseModel = exports.PurchaseSchema = void 0;
var mongoose_1 = require("mongoose");
exports.PurchaseSchema = new mongoose_1.Schema({
    productId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Product" },
    clientId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Client" }
});
exports.PurchaseModel = mongoose_1.model("Purchase", exports.PurchaseSchema); // the connection to the DB collection
