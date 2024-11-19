"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var orderSchema = new mongoose_1.Schema({
    client: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'Client', required: true },
    product: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'Product', required: true }
});
var orderModel = mongoose_1["default"].model('order', orderSchema);
exports["default"] = orderModel;
