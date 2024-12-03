"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 3000;
var public_array = [];
app.use(express_1["default"].json()); //middleware to get data from the body
app.use(express_1["default"].static('public')); //middleware
app.get("/api/get-words", function (req, res) {
    try {
        var x = public_array.join(", "); // חיבור המערך למחרוזת אחת
        res.send({ message: x }); // שלח את המידע כאובייקט JSON
        console.log(x);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
app.post("/api/send-words", function (request, res) {
    try {
        var newPost = request.body.all_post_inputs; // גישה ל-all_post_inputs
        console.log("word post received");
        console.log(newPost);
        public_array.push.apply(public_array, newPost); // הוספת המילים למערך
        res.send("post created successfully");
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
//get = a method of http
//route '/' 
//req = request
//res = response
//event handler of get method
// app.get('/main', (req, res) => {
//     console.log("<h1 style='color: blue'>hello world</h1>");
//     let x:string = '';
//     for (let i = 0; i < 10; i++) {
//         x += `${i} ,`;
//     }
//     res.send(`<h1 style='color: blue'>hello world</h1><h2>from express</h2><p>${x}</p>`)
// })
// app.get('/about', (req, res) => {
//     res.send("<h1 style='color: green'>About us</h1>")
// })
// //route
// app.get('/api/get-hello', (x, y)=>{
//     try{
//         // setTimeout(() => {
//         y.send({message: "Hello from express"});
//         // }, 3000);
//     } catch(error){
//         console.error(error);
//     }
// })
//server
// app.get('/api/get-randomNumber', (request, res)=>{
//        let randomNumber = Math.random();
//         res.send(`<h1> your random number ${randomNumber}</h1>`);
// });
