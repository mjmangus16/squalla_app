const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require("../../models/Profile");

// Functions
const getPerformancePointsPerRound = require("./functions/dashboard/getPerformancePointsPerRound");
const getPerformancePointsPerCourse = require("./functions/performance/getPerformancePointsPerCourse");
const getPerformanceTrendByMonth = require("./functions/performance/getPerformanceTrendByMonth");
const getPerformanceOverall = require("./functions/performance/getPerformanceOverall");

// @route   GET api/performance/
// @desc    Get user performance data
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      let data = {
        performancePointsPerRound: getPerformancePointsPerRound(profile),
        performancePointsPerCourse: getPerformancePointsPerCourse(profile),
        performanceTrendByMonth: getPerformanceTrendByMonth(profile),
        performanceOverall: getPerformanceOverall(
          profile.rounds,
          profile.username
        )
      };
      return res.json(data);
    });
  }
);

module.exports = router;
