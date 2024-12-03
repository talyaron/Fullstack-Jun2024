"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
// import fs from 'fs';
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].static('public'));
// "/" is an API that gets the requested data
//req = requested data
//res = responde to the request ===> the data itself
app.get('/alexis', function (req, res) {
    console.log("Alexis and Valery");
    //it's in the server so we can see that only through the terminal, unlike the regular ts, where everything gets into the console/
    //console.log() in the server means we cansee that in the terminal and not the console of the website
    res.sendFile(path_1["default"].resolve('public', 'index.html'));
    // response sent
});
// //build function for reading data txt files
// function demoAsync() {
//     fs.readFile("data/personaldata.json", "utf8", (err, content) => {
//       if (err) return console.log("Cannot read file", err);
//       content.send(content);
//     });
//   }
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
