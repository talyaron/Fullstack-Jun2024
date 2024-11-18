import express from "express";
import { clientRouter } from "./routes/clientRoutes/clientRoutes";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const dbURI =
  "mongodb+srv://ukaganovich:womyhuZG0NZi4NWc@cluster0.gl27q.mongodb.net";
const database = "clients";

mongoose
  .connect(`${dbURI}/${database}`)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Failed to connect to the database", err);
  });

// routes
app.use("/api/clients", clientRouter);


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
