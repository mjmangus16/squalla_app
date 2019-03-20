const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require("../../models/Profile");

// @route   GET api/notifications/
// @desc    Get user snapshot
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      const data = {
        rounds: profile.notifications.rounds,
        checkins: profile.notifications.checkins,
        other: profile.notifications.other
      };
      return res.json(data);
    });
  }
);

router.get(
  "/clearAll",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      profile.notifications.rounds = [];
      profile.notifications.checkins = [];
      profile.notifications.other = [];

      profile.markModified("notifications");
      profile.save().then(profile => {
        return res.json(profile.notifications);
      });
    });
  }
);

module.exports = router;
