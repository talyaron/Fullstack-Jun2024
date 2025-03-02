"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setProducts_1 = require("../../controllers/products/setProducts");
var getProducts_1 = require("../../controllers/products/getProducts");
var getUser_1 = require("../../controllers/clients/middleware/getUser");
var router = express_1["default"].Router();
// Get all comments
// Create a new comment
router.post('/add-product', setProducts_1.addProduct);
router.get('/my-products', getUser_1.getUser, getProducts_1.getMyProducts).get('/get-all-products', getProducts_1.getProducts);
exports["default"] = router;
