const express = require("express");
const router = express.Router();
const passport = require("passport");
const _ = require("lodash");

const Achievement = require("../../models/Achievement");
const Profile = require("../../models/Profile");

// Functions
const getTotalAchievementsEarned = require("./functions/achievements/getTotalAchievementsEarned");
const getMostPointsInRound = require("./functions/achievements/getMostPointsInRound");
const getAchievementPointsPerRound = require("./functions/dashboard/getAchievementPointsPerRound");
const getPointsEarnedPerMonth = require("./functions/achievements/getPointsEarnedPerMonth");

// @route   GET api/achievements/test
// @desc    Tests achievements route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Achievements Works" }));

// @route   GET api/achievements
// @desc    Get User Achievement Data
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      const data = {
        stats: {
          totalPoints: profile.achievementPoints,
          totalAchievementsEarned: getTotalAchievementsEarned(
            profile.achievements
          ),
          mostPointsInRound: getMostPointsInRound(
            profile.rounds,
            profile.username
          )
        },
        pointsEarnedPerRound: getAchievementPointsPerRound(profile),
        pointsEarnedPerMonth: getPointsEarnedPerMonth(
          profile.rounds,
          profile.username
        )
      };

      Achievement.find().then(achievements => {
        data.achievements = _.uniqBy(
          [...profile.achievements, ...achievements],
          "code"
        );

        return res.json(data);
      });

      // Stats total points, total achieves earned, most points earned in a round
      // Points earned per round
      // Points earned per month
      // All achievements
    });
  }
);

// @route   GET api/achievements/all
// @desc    Get all achievements from database
// @access  Public
router.get("/all", (req, res) => {
  Achievement.find().then(data => res.json(data));
});

// @route   GET api/achievements/code
// @desc    Get achievement by code
// @access  Public
router.get("/code/:code", (req, res) => {
  Achievement.findOne({ code: req.params.code }).then(achieve =>
    res.json(achieve)
  );
});

module.exports = router;
