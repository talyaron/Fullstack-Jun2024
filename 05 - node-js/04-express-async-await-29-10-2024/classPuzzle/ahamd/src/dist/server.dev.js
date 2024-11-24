"use strict";

var express = require('express');

var app = express();

var cors = require('cors');

app.use(cors());
app.use(express["static"]('../public'));
app.get('/random-number', function (req, res) {
  var randomNumber = Math.floor(Math.random() * 1000) + 1;
  res.json({
    number: randomNumber
  });
});
var PORT = 3000;
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:".concat(PORT));
});