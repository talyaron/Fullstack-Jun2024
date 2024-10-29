"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// import fs from 'fs';
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.static('public'));
// "/" is an API that gets the requested data
//req = requested data
//res = responde to the request ===> the data itself
app.get('/', (req, res) => {
    console.log("eldenLord");
    res.sendFile(path_1.default.resolve('public', 'index.html'));
    // response sent
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map