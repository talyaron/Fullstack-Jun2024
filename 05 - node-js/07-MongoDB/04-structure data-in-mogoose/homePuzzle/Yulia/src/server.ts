import express from "express";
import { clientRouter } from "./routes/clientRoutes/clientRoutes";
import mongoose from "mongoose";
import appointmentRouters from "./routes/appointmentsRouters/appointmentRouters";
import serviceProviderRouters from "./routes/serviceProviderRouters/serviceProviderRouters";
import serviceRouters from "./routes/serviceRouters/serviceRouters";

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const dbURI =
  "mongodb+srv://Yulia:1XZsJjMngOQqqtTF@cluster0.gl27q.mongodb.net";
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
app.use("/api/appointments", appointmentRouters);
app.use("/api/service-providers", serviceProviderRouters);
app.use("/api/services", serviceRouters);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
