import  express  from "express";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); // To parse JSON bodies
app.use(express.static("public")); //middleware





app.listen(port, () => {
    console.log(`Example unstagram app listening on port ${port}`);
  });