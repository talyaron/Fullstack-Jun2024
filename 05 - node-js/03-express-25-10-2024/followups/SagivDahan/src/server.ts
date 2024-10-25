import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

//get = a method of http
//route '/' 

//req = request
//res = response

//event handler of get method
app.get('/', (req, res) => {
    console.log("hello world");
    res.send('something');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});