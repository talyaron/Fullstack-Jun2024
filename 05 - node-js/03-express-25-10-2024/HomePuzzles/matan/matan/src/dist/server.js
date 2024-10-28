var express = require('express');
var app = express();
var port = process.env.port || 3004;
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send('Hello World!');
    console.log('hello');
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
