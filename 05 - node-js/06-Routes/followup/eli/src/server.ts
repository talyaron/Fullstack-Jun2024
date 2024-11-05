import express from "express";
import bodyParser from "body-parser";
import { posts } from "./model/model";
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

import route from './routes/route';

app.use("/api/users",route)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
