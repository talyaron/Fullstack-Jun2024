"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json()); //middleware to get data from the body
app.use(express_1["default"].static('public')); //middleware
var posts = [];
app.post("/api/send-posts", function (req, res) {
    try {
        var postData = req.body;
        if (!postData.dataTitle)
            throw new Error("Title not found");
        if (!postData.dataDes)
            throw new Error("Des not found");
        posts.push({ title: postData.dataTitle, des: postData.dataDes, img: postData.dataImg });
        res.send({ message: "Post add seccusefuly", posts: posts });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error" });
    }
});
app.get("/api/get-posts", function (req, res) {
    try {
        res.send({ existPost: 'Post sent to client', posts: posts });
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
