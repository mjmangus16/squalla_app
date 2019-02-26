const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require("../../models/Profile");
const Course = require("../../models/Course");
const Achievement = require("../../models/Achievement");
const League = require("../../models/League");

// Functions
const getLevel = require("./functions/getLevel");
const updateStats = require("./functions/updateStats");
const getExperience = require("./functions/getExperience");
const getTeeData = require("./functions/getTeeData");
const getPerformance = require("./functions/getPerformance");
const getAverage = require("./functions/getAverage");
const addCourseToProfile = require("./functions/addCourseToProfile");
const doesCourseExist = require("./functions/doesCourseExist");
const getAchievements = require("./functions/achievements/getAchievements");
const collectCourseHistory = require("./functions/collectCourseHistory");
const updateAchievements = require("./functions/achievements/updateAchievements");
const compareAchievements = require("./functions/achievements/compareAchiements");
const getLeagueData = require("./functions/leagues/getLeagueData");

// @route   POST api/addRound
// @desc    Post a round
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Get Round Data
    // Date
    // Course
    // Tees
    // Owner
    // League
    // Scores
    // Player
    // Score

    let league = null;

    if (req.body.league !== "") {
      league = req.body.league;
    }

    const round = {
      date: req.body.date,
      course: req.body.course,
      tees: req.body.tees,
      owner: req.user.username,
      league: league,
      scores: []
    };

    let players = [];
    let scores = [];

    if (req.body.players) {
      if (req.body.players.indexOf(",") > -1) {
        players = req.body.players.split(",");
      } else {
        players = [req.body.players];
      }
    }

    if (req.body.scores) {
      if (req.body.scores.indexOf(",") > -1) {
        scores = req.body.scores.split(",");
      } else {
        scores = [req.body.scores];
      }
    }

    for (let i = 0; i < players.length; i++) {
      let score = {
        username: players[i],
        score: scores[i],
        experience: 0,
        performance: 0
      };
      round.scores.push(score);
    }

    if (round.league !== null) {
      League.findOne({ name: round.league }).then(league => {
        if (league) {
          league = getLeagueData(league, round);
          league.save();
        }
      });
    }

    for (let i = 0; i < players.length; i++) {
      Profile.findOne({ username: round.scores[i].username }).then(profile => {
        Course.findOne({ name: round.course }).then(course => {
          Achievement.find().then(allAchieves => {
            let courseExists = doesCourseExist(profile.courses, round.course);

            if (!courseExists) {
              profile = addCourseToProfile(course, profile);
            }
            let average = getAverage(round, profile);

            profile.performancePoints =
              profile.performancePoints +
              getPerformance(average, round.scores[i].score);

            round.scores[i].performance = getPerformance(
              average,
              round.scores[i].score
            );
            const teeData = getTeeData(profile, round);
            round.scores[i].experience = getExperience(
              teeData,
              profile.level,
              profile.achievementPoints,
              round.scores[i].score,
              course.holes
            );

            profile.rounds.unshift(round);

            profile = updateStats(profile, round, round.scores[i].score);
            profile.markModified("courses");

            let courseInfo = {
              name: round.course,
              holes: course.holes,
              tees: course.tees,
              terrain: course.terrain,
              landscape: course.landscape
            };

            courseInfo.history = collectCourseHistory(
              courseInfo,
              profile.rounds,
              profile.username
            );

            let userStats = {
              average: teeData.average,
              best: teeData.best,
              score: round.scores[i].score,
              rating: teeData.rating
            };

            const achieveData = {
              courseInfo,
              userStats
            };

            const achievesEarned = getAchievements(
              profile,
              round,
              allAchieves,
              achieveData
            );

            const achieveInfo = updateAchievements(achievesEarned);
            profile.achievementPoints =
              profile.achievementPoints + achieveInfo.points;

            const myUpdatedAchieves = compareAchievements(
              profile.achievements,
              achievesEarned
            );

            profile.snapshot.rounds.push({
              experience: round.scores[i].experience,
              achievementPoints: achieveInfo.points,
              performancePoints: round.scores[i].performance
            });
            profile.markModified("snapshot");

            profile.achievements = [];
            profile.achievements = myUpdatedAchieves;

            profile.experience =
              profile.experience +
              getExperience(
                teeData,
                profile.level,
                profile.achievementPoints,
                round.scores[i].score,
                course.holes
              );
            profile.level = getLevel(profile.experience);
            // profile.save();
            // return res.json(profile);
            // profile.save().then(profile => res.json(profile));
          });
        });
      });
    }

    1; // If League, handle league
    // Loop through all players
    // Add course to players profile if it has not already been added
    // Get course data
    // Average
    // Best
    // Get player score
    // Get player exp
    // Get player performance points
    // Add exp and PP to Round Data
    // save round
    // add round to
  }
);

module.exports = router;
