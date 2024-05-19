const express = require("express");
const mongoose = require("mongoose");
const app = require("./app"); // Import the app configuration
const port = 5000;

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// mongodb+srv://capitalbeats:rPrSvx9z7qbqnkiJ@paindocumentation.xpktlaa.mongodb.net/?retryWrites=true&w=majority&appName=PainDocumentation
