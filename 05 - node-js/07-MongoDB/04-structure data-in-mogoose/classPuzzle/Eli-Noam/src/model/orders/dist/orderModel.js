"use strict";
exports.__esModule = true;
exports.OrderModel = exports.orderSchema = void 0;
var mongoose_1 = require("mongoose");
exports.orderSchema = new mongoose_1.Schema({
    status: {
        require: true,
        type: String
    },
    clientID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'Client', required: true },
    productID: {
        require: true,
        type: String
    },
    date: {
        require: true,
        type: String
    }
});
exports.OrderModel = mongoose_1.model("Order", exports.orderSchema);
