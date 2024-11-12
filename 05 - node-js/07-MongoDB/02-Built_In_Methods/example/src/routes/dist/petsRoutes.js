"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setPetsCont_1 = require("../controllers/pets/setPetsCont");
var getPetsCont_1 = require("../controllers/pets/getPetsCont");
var router = express_1["default"].Router();
router.post('/add-pet', setPetsCont_1.addPet);
router.get('/get-pets', getPetsCont_1.getPets);
exports["default"] = router;
