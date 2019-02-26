const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require("../../models/Profile");
const Round = require("../../models/Round");

// @route   GET api/rounds
// @desc    Get user rounds data
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      // Rounds played per month over year
      // Total rounds played & list of rounds from that year.
    });
  }
);

// @route   GET api/rounds/:id
// @desc    Get user rounds data
// @access  Private
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Round.findById(req.params.id).then(round => {
      // Get round details by id
      // All players score and performance score
    });
  }
);

module.exports = router;
