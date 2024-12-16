const express = require("express");
const authRoutes = require("./routes/authRoute");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

module.exports = app;
