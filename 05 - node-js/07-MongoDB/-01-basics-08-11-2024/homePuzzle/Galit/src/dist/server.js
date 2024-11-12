"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var express_session_1 = require("express-session");
var mongoose_1 = require("mongoose");
var session_file_store_1 = require("session-file-store");
var postsRoute_1 = require("./routes/postsRoute");
var userRoute_1 = require("./routes/userRoute");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
var FileSessionStore = session_file_store_1["default"](express_session_1["default"]);
app.use(body_parser_1["default"].json({ limit: '10mb' }));
app.use(body_parser_1["default"].urlencoded({ limit: '10mb', extended: true }));
app.use(body_parser_1["default"].json());
app.use(express_1["default"].static('public'));
app.use(express_session_1["default"]({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));
var dbUrl = "mongodb+srv://galitccga:q4wlV111QcHSFkDZ@cluster0.sevm84o.mongodb.net/Instagram-project";
var database = 'instagram';
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
    console.info("DB connected");
})["catch"](function (err) {
    console.error(err);
});
app.use('/api/posts', postsRoute_1["default"]);
app.use('/api/users', userRoute_1["default"]);
app.listen(port, function () {
    console.log("Server running on port " + port);
});
