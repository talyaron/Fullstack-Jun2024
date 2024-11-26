"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setProducts_1 = require("../../controllers/products/setProducts");
var router = express_1["default"].Router();
// Get all comments
// Create a new comment
router.post('/add-product', setProducts_1.addProduct);
router.get('/my-products', getMyProducts).get('/get-all-products', getProducts);
exports["default"] = router;
