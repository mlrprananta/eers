const express = require("express");
const path = require("path");
const router = express.Router();
const cors = require("cors");
const querystring = require("querystring");

const AUTHORIZE_URI = "https://accounts.spotify.com/authorize?";

//TODO Use state
router.get("/", cors(), (req, res) => {
  const scope = "user-read-private user-read-email user-top-read";
  console.log("GET");
  res.redirect(
    AUTHORIZE_URI +
      querystring.stringify({
        client_id: process.env.CLIENT_ID,
        response_type: "code",
        redirect_uri: process.env.REDIRECT_URI,
        scope: scope,
        state: "xyz",
      })
  );
});

module.exports = router;
