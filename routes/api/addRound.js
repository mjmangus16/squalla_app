const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require("../../models/Profile");
const Course = require("../../models/Course");
const Achievement = require("../../models/Achievement");
const League = require("../../models/League");

// Load Input Validation
const validateAddRoundInput = require("../../validation/addRound");

// Functions
const getLevel = require("./functions/addRound/getLevel");
const updateStats = require("./functions/addRound/updateStats");
const getExperience = require("./functions/addRound/getExperience");
const getTeeData = require("./functions/addRound/getTeeData");
const getPerformance = require("./functions/addRound/getPerformance");
const getAverage = require("./functions/addRound/getAverage");
const addCourseToProfile = require("./functions/addRound/addCourseToProfile");
const doesCourseExist = require("./functions/addRound/doesCourseExist");
const getAchievements = require("./functions/addRound/achievements/getAchievements");
const collectCourseHistory = require("./functions/addRound/collectCourseHistory");
const updateAchievements = require("./functions/addRound/achievements/updateAchievements");
const compareAchievements = require("./functions/addRound/achievements/compareAchiements");
const getLeagueData = require("./functions/addRound/leagues/getLeagueData");

// @route   POST api/addRound
// @desc    Post a round
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateAddRoundInput(req.body);
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

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

    if (players.length !== scores.length) {
      errors.scores =
        "The number of players selected and the number of scores submitted must match";
      return res.json(errors);
    }

    for (let i = 0; i < players.length; i++) {
      let score = {
        username: players[i],
        score: scores[i],
        experience: 0,
        performance: 0,
        achievementPoints: 0
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

            round.scores[i].achievementPoints = achieveInfo.points;

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
            profile.save();
          });
        });
      });
    }
    return res.json(round);
  }
);

module.exports = router;
