const express = require("express");
const path = require("path");
const router = express.Router();

const dist = path.join(__dirname, "..", "client", "build");

router.get("/", function (req, res, next) {
  res.sendFile(path.join(dist, "index.html"));
});

module.exports = router;
