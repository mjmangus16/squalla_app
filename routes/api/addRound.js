const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require("../../models/Profile");
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
const getCourseRating = require("./functions/addRound/getCourseRating");

// @route   POST api/addRound
// @desc    Post a round
// @access  Private
router.post(
  "/submit",
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

    let course = {
      name: req.body.course,
      city: req.body.city,
      state: req.body.state,
      holes: req.body.holes,
      distance: req.body.distance,
      foliage: req.body.foliage,
      elevation: req.body.elevation
    };

    course.rating = getCourseRating(
      course.distance,
      course.foliage,
      course.elevation
    );

    const round = {
      date: req.body.date,
      course: req.body.course,
      tees: req.body.tees,
      holes: req.body.holes,
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
      Profile.findOne({ username: round.scores[i].username })
        .then(profile => {
          Achievement.find()
            .then(allAchieves => {
              let courseExists = doesCourseExist(profile.courses, round.course);

              if (!courseExists) {
                profile = addCourseToProfile(course, profile);
              }

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

              const teeData = getTeeData(profile, round);

              let average = getAverage(courseInfo.history);
              let performance = getPerformance(
                average,
                teeData.best,
                round.scores[i].score
              );

              profile.performancePoints =
                profile.performancePoints + performance;

              round.scores[i].performance = performance;

              teeData.rating = course.rating;

              profile.rounds.unshift(round);

              profile = updateStats(
                profile,
                round,
                round.scores[i].score,
                average
              );
              profile.markModified("courses");

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

              let extraPerformancePoints = 0;

              for (let i = 0; i < achievesEarned.length; i++) {
                if (achievesEarned[i].code === 22) {
                  extraPerformancePoints++;
                  for (let i = 0; i < profile.rounds[0].scores.length; i++) {
                    if (
                      profile.rounds[0].scores[i].username === profile.username
                    ) {
                      profile.rounds[0].scores[i].performance++;
                    }
                  }
                }
              }

              profile.performancePoints =
                profile.performancePoints + extraPerformancePoints;
              // console.log(achievesEarned);

              const achieveInfo = updateAchievements(achievesEarned);
              profile.achievementPoints =
                profile.achievementPoints + achieveInfo.points;

              round.scores[i].achievementPoints = achieveInfo.points;

              const myUpdatedAchieves = compareAchievements(
                profile.achievements,
                achievesEarned
              );

              profile.achievements = [];
              profile.achievements = myUpdatedAchieves;

              round.scores[i].experience = getExperience(
                teeData,
                profile.level,
                profile.achievementPoints,
                round.scores[i].score,
                course.holes
              );

              const userExp = getExperience(
                teeData,
                profile.level,
                profile.achievementPoints,
                round.scores[i].score,
                course.holes
              );

              profile.experience = profile.experience + userExp;

              let oldLevel = profile.level;
              profile.level = getLevel(profile.experience);
              profile
                .save()
                .then(profile => {
                  const returnData = {
                    date: round.date,
                    course: round.course,
                    tees: round.tees,
                    owner: round.owner,
                    league: round.league,
                    username: profile.username,
                    oldLevel: oldLevel,
                    newLevel: profile.level,
                    originalExp: profile.experience - userExp,
                    gainedExp: userExp,
                    score: parseInt(userStats.score),
                    average: userStats.average,
                    best: userStats.best,
                    achievements: achievesEarned.length,
                    achievePoints: achieveInfo.points,
                    performance: performance
                  };

                  if (profile.username !== req.user.username) {
                    profile.notifications.rounds.unshift(returnData);
                    profile.markModified("notifications");
                  }

                  profile
                    .save()
                    .then(profile => {
                      for (let i = 0; i < achievesEarned.length; i++) {
                        profile.notifications.other.unshift({
                          type: "achievementEarned",
                          data: {
                            name: achievesEarned[i].name,
                            description: achievesEarned[i].description,
                            points: achievesEarned[i].points,
                            date: req.body.date
                          }
                        });
                      }
                      profile.markModified("notifications");
                      profile
                        .save()
                        .then(profile => {
                          if (profile.username === req.user.username) {
                            return res.json(returnData);
                          }
                        })
                        .catch(err => {
                          console.log(err);
                          return err;
                        });
                    })
                    .catch(err => {
                      console.log(err);
                      return err;
                    });
                })
                .catch(err => {
                  console.log(err);
                  return err;
                });
            })
            .catch(err => {
              console.log(err);
              return err;
            });
        })
        .catch(err => {
          console.log(err);
          return err;
        });
    }
  }
);

module.exports = router;
