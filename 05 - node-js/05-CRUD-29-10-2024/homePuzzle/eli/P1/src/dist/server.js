"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json()); //middleware to get data from the body
app.use(express_1["default"].static('public')); //middleware
var words = [];
app.get('/api/renderWords', function (req, res) {
    try {
        // setTimeout(() => {
        var names_1 = [];
        words.forEach(function (name) {
            return names_1.push(name);
        });
        res.send({ message: words + "  " });
        // }, 3000);
    }
    catch (error) {
        console.error(error);
    }
});
//route
app.get('/api/get-hello', function (req, res) {
    try {
        // setTimeout(() => {
        res.send({ message: "" + words });
        // }, 3000);
    }
    catch (error) {
        console.error(error);
    }
});
// route to send something to the server
app.post("/api/send-word", function (req, res) {
    try {
        var data = req.body;
        if (!data.word)
            throw new Error("No word found");
        words.push(data.word, data.img);
        console.log(data);
        res.send({ message: "Word received", words: words });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error" });
    }
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
