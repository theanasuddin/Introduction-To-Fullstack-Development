const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

const connectDB = require("./config/database");
const sessionConfig = require("./config/session");
const eventRoutes = require("./routes/events");
const userRoutes = require("./routes/users");
const apiRoutes = require("./routes/api");

const app = express();
connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(sessionConfig);

app.use("/", eventRoutes);
app.use("/", userRoutes);
app.use("/", apiRoutes);

module.exports = app;
