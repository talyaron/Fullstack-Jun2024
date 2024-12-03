"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var express_session_1 = require("express-session");
var session_file_store_1 = require("session-file-store");
var dotenv_1 = require("dotenv");
var mongoose_1 = require("mongoose");
var postsRoute_1 = require("./routes/postsRoute");
var userRoute_1 = require("./routes/userRoute");
dotenv_1["default"].config();
var app = express_1["default"]();
var port = process.env.PORT || 3000;
var FileSessionStore = session_file_store_1["default"](express_session_1["default"]);
var connectToDatabase = function () { return __awaiter(void 0, void 0, void 0, function () {
    var dbURL, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dbURL = process.env.DB_URL || '';
                return [4 /*yield*/, mongoose_1["default"].connect(dbURL, {})];
            case 1:
                _a.sent();
                console.log('Connected to MongoDB');
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error('Error connecting to MongoDB:', error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
connectToDatabase();
app.use(body_parser_1["default"].json({ limit: '10mb' }));
app.use(body_parser_1["default"].urlencoded({ limit: '10mb', extended: true }));
app.use(express_1["default"].static('public'));
app.use(express_session_1["default"]({
    store: new FileSessionStore(),
    secret: process.env.JWT_SECRET || 'default_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));
app.use('/api/posts', postsRoute_1["default"]);
app.use('/api/users', userRoute_1["default"]);
app.use(function (req, res, next) {
    res.status(404).json({ message: 'Route not found' });
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});
app.listen(port, function () {
    console.log("Server running on http://localhost:" + port);
});
