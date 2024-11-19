"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var OrderSchema = new mongoose_1.Schema({
    productId: { type: String, required: true },
    clientId: { type: String, required: true }
});
var Order = mongoose_1.model('Order', OrderSchema);
exports["default"] = Order;
