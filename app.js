const express = require("express");
const path = require("path");
const cors = require("cors");
const router = require("./components/index");
const app = express();
require("dotenv").config();

const dist = path.join(__dirname, "client", "build");

app.use(express.static(dist));
app.use(express.json());
app.use(cors());
app.use("/api/authenticate", require("./components/authenticate"));
app.use("/*", router);

module.exports = app;
