const express = require("express");
const router = express.Router();
const passport = require("passport");
const request = require("request");

const pdgaApiUsername = require("./../../config/pdgaApi").pdgaApiUsername;
const pdgaApiPassword = require("./../../config/pdgaApi").pdgaApiPassword;

// @route   POST api/pdgaAPI/byName
// @desc    GET Courses by name
// @access  Private
router.post(
  "/search",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    request(
      {
        url: "https://api.pdga.com/services/json/user/login",
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        json: true,
        body: {
          username: pdgaApiUsername,
          password: pdgaApiPassword
        }
      },
      (error, response, body) => {
        let _URL;
        switch (req.body.query) {
          case "name":
            _URL = `course?course_name=${req.body.data}`;
            break;
          case "state":
            _URL = `course?state_prov=${req.body.data}`;
            break;
          case "zip":
            _URL = `course?postal_code=${req.body.data}`;
            break;
          case "nearMe":
            _URL = `course?${req.body.data}`;
            break;
          default:
            _URL = null;
        }

        request({
          url: `http://api.pdga.com/services/json/${_URL}&limit=${
            req.body.limit
          }`,
          headers: {
            Cookie: `${body.session_name}=${body.sessid}`
          },
          method: "GET"
        }).pipe(res);
      }
    );
  }
);

module.exports = router;
