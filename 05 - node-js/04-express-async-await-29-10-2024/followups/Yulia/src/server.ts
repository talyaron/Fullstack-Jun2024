import express from "express";
const app = express();
const port = process.env.PORT || 3001;

console.log("Hi from typescript");


app.use(express.static("public")); //middleware

//get = a method of http
//route '/'

//req = request
//res = response

//event handler of get method
app.get("/main", (req, res) => {
  console.log("hello world");
  let x = "";
  for (let i = 0; i < 10; i++) {
    x += `${i} ,`;
  }
  res.send(`<h1>hello world</h1><h2>from express</h2><p>${x}</p>`);
});

app.get("/about", (req, res) => {
  res.send("<h1>About us</h1>");
});

//route
app.get("/api/get-hello", (req, res) =>{
  try {
    res.send({ message: "Hello from express" });
  } catch (error) {
    console.error(error);
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
