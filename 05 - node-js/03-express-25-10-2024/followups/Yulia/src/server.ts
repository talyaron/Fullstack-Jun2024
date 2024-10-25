import express from "express";
const app = express();
const port = process.env.PORT || 3000;

console.log("Hi from typescript");

const x: number = 5;
console.log(x);

//get = a method of http
//route '/'

//req = request
//res = response

//event handler of get method
app.get("/", (req, res) => {
  console.log("hello world");
  res.send("Hello World!!!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
