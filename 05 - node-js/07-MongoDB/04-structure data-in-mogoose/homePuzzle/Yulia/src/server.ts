import express from "express";
import { clientRouter } from "./routes/clientRoutes/clientRoutes";
import mongoose from "mongoose";
import appointmentRouters from "./routes/appointmentsRouters/appointmentRouters";
import serviceProviderRouters from "./routes/serviceProviderRouters/serviceProviderRouters";
import serviceRouters from "./routes/serviceRouters/serviceRouters";

const app = express();
const port = 3000;

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/clients"); // redirect to the clients page
});

// Serve static pages for different sections
app.get("/clients", (req, res) => {
  res.sendFile("index.html", { root: "public/clients" });
});

app.get("/appointments", (req, res) => {
  res.sendFile("index.html", { root: "public/appointments" });
});

app.get("/service-providers", (req, res) => {
  res.sendFile("index.html", { root: "public/serviceProviders" });
});

app.get("/services", (req, res) => {
  res.sendFile("index.html", { root: "public/services" });
});

// MongoDB connection
const dbURI = "mongodb+srv://Yulia:1XZsJjMngOQqqtTF@cluster0.gl27q.mongodb.net";
const database = "clients";

mongoose
  .connect(`${dbURI}/${database}`)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Failed to connect to the database", err);
  });

// API routes
app.use("/api/clients", clientRouter);
app.use("/api/appointments", appointmentRouters);
app.use("/api/service-providers", serviceProviderRouters);
app.use("/api/services", serviceRouters);

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});