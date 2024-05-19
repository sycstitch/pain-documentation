const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/data", (req, res) => {
  // Fetch data from MongoDB
  res.json({ message: "Data fetched successfully" });
});

module.exports = app;
