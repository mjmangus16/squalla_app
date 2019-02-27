const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require("../../models/Profile");

// Functions
const getRecentRounds = require("./functions/dashboard/getRecentRounds");
const getCoursesPlayed = require("./functions/dashboard/getCoursesPlayed");
const getRoundsPerCourse = require("./functions/dashboard/getRoundsPerCourse");
const getAchievementPointsPerRound = require("./functions/dashboard/getAchievementPointsPerRound");
const getRoundsPerFriend = require("./functions/dashboard/getRoundsPerFriend");

// @route   GET api/dashboard/
// @desc    Get user dashboard data
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      let data = {
        level: profile.level,
        experience: profile.experience,
        roundsPlayed: profile.rounds.length,
        recentRounds: getRecentRounds(profile.rounds, profile.username),
        coursesPlayed: getCoursesPlayed(profile.courses),
        roundsPerCourse: getRoundsPerCourse(profile),
        achievementPoints: profile.achievementPoints,
        achievementPointsPerRound: getAchievementPointsPerRound(profile),
        totalFriends: profile.friends.length,
        roundsPerFriend: getRoundsPerFriend(profile)
      };

      return res.json(data);
    });
  }
);

module.exports = router;
