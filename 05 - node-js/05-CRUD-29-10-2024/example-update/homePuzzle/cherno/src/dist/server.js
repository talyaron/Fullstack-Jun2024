"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json()); //middleware to get data from the body
app.use(express_1["default"].static('public')); //middleware
var posts = [];
//route
app.get('/api/get-posts', function (req, res) {
    try {
        res.send({ posts: posts });
    }
    catch (error) {
        console.error(error);
    }
});
// route to send something to the server
app.post("/api/send-post", function (req, res) {
    try {
        var data = req.body.data;
        console.log(data);
        if (!data)
            throw new Error("No post found");
        posts.push(data);
        res.send({ message: "post received" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error" });
    }
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
