const express = require("express");
const router = express.Router();
const passport = require("passport");

const Pofile = require("../../models/Profile");

// @route   GET api/friends/
// @desc    Post course to database
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.find({ username: req.user.username }).then(profile => {});
  }
);

// @route   POST api/courses/add
// @desc    Post course to database
// @access  Private
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.find({ username: req.user.username }).then(profile => {});
  }
);

module.exports = router;
