"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.json()); // takes the header of the request and if it is json it will parse it into an object and attach it to the request object (req.body)
//header -> req.body
app.use(express_1.default.static('public'));
//DB
const dbUrl = "mongodb+srv://tal:k8w0S6ztTx3zowGW@cluster0.0hzknon.mongodb.net";
const database = 'fs-jun24';
mongoose_1.default.connect(`${dbUrl}/${database}`).then(() => {
    console.info("DB connected");
}).catch((err) => {
    console.error(err);
});
//routesD
const usersRoutes_1 = __importDefault(require("./src/routes/usersRoutes"));
app.use("/api/users", usersRoutes_1.default);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
