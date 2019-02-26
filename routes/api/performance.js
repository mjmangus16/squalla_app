const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require("../../models/Profile");

// @route   GET api/performance/
// @desc    Get user performance data
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.find({ username: req.user.usernam }).then(profile => {
      // Performance of last 10 rounds
      // Performance points per course
      // Performance point total per month over year
    });
  }
);

module.exports = router;
