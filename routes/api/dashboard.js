const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require("../../models/Profile");

// Functions
const getPerformancePointsPerRound = require("./functions/dashboard/getPerformancePointsPerRound");
const getRecentRounds = require("./functions/dashboard/getRecentRounds");
const getCoursesPlayed = require("./functions/dashboard/getCoursesPlayed");
const getRoundsPerCourse = require("./functions/dashboard/getRoundsPerCourse");
const getAchievementPointsPerRound = require("./functions/dashboard/getAchievementPointsPerRound");
const getRoundsPerFriend = require("./functions/dashboard/getRoundsPerFriend");
const getRoundsPlayed = require("./functions/dashboard/getRoundsPlayed");

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
        performanceRating: profile.performancePoints,
        performancePointsPerRound: getPerformancePointsPerRound(
          profile.rounds,
          profile.performancePoints,
          profile.username
        ),
        roundsPlayed: getRoundsPlayed(profile.rounds),
        recentRounds: getRecentRounds(profile.rounds, profile.username),
        coursesPlayed: getCoursesPlayed(profile.courses),
        roundsPerCourse: getRoundsPerCourse(profile.courses, profile.rounds),
        achievementPoints: profile.achievementPoints,
        achievementPointsPerRound: getAchievementPointsPerRound(
          profile.rounds,
          profile.achievementPoints,
          profile.username
        ),
        totalFriends: profile.friends.length,
        roundsPerFriend: getRoundsPerFriend(profile.rounds, profile.friends)
      };

      return res.json(data);
    });
  }
);

module.exports = router;
