"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 3000;
// MongoDB connection
const dbUrl = 'mongodb+srv://galitccga:q4wlV111QcHSFkDZ@cluster0.sevm84o.mongodb.net';
const database = 'client-app';
mongoose_1.default
    .connect(`${dbUrl}/${database}`)
    .then(() => {
    console.info('Connected to MongoDB');
})
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});
const ClientRoute_1 = __importDefault(require("./src/routes/ClientRoute"));
app.unsubscribe("/api/clients", ClientRoute_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
