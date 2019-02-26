const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require("../../models/Profile");

// @route   GET api/dashboard/
// @desc    Get user dashboard data
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.find({ username: req.user.usernam }).then(profile => {
      let data = {
        level: profile.level,
        experience: profile.experience,
        roundsPlayed: profile.rounds.length,
        recentRounds: getRecentRounds(),
        coursesPlayed: getCoursesPlayed(),
        roundsPerCourse: getRoundsPerCourse(),
        achievementPoints: profile.achievementPoints,
        achievementPointsPerRound: getAchievementPointsPerRound()
      };
      // Level & Experience
      // Performance of last 10 rounds
      // last 3 rounds & Total rounds played
      // Rounds played per top 7 courses & total courses played
      // Total achievement points & points earned per last 10 rounds
      // Rounds played with top 7 friends & total friends
    });
  }
);

module.exports = router;
