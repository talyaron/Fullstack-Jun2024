import express from 'express';
const app = express()
const port = process.env.PORT || 3000

console.log("Hi from typescript");


app.use(express.static('public'))

//get = a method of http
//route '/' 

//req = request
//res = response

//event handler of get method

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});