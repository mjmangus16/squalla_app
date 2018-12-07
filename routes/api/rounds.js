const express = require("express");
const router = express.Router();
const passport = require("passport");

const Round = require("../../models/Round");
const Profile = require("../../models/Profile");
const Course = require("../../models/Course");

const getCourseRating = require("../../functions/getCourseRating");
const getExp = require("../../functions/leveling/expGained");
const levels = require("../../functions/leveling/levels");

// Load Input Validation
const validateRoundsInput = require("../../validation/rounds");

// @route   GET api/rounds/test
// @desc    Tests rounds route
// @access  Public
router.get("/test", (rez, res) => res.json({ msg: "Rounds Works" }));

// @route   GET api/rounds/recent
// @desc    Get user's recent rounds
// @access  Private
router.get(
  "/recent",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      let recentRounds = profile.rounds.slice(0, 5);
      res.json(recentRounds);
    });
  }
);

// @route   POST api/rounds/add
// @desc    Submit a round
// @access  Private
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let league;

    if (req.body.league) {
      league = req.body.league;
    } else {
      league = "N/A";
    }

    let players = [];
    let scores = [];
    let playedCourse = {
      name: req.body.course,
      tees: req.body.tees
    };

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

    const { errors, isValid } = validateRoundsInput(req.body, players, scores);
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    let roundScores = [];
    for (let i = 0; i < players.length; i++) {
      roundScores.push({
        player: players[i],
        score: scores[i]
      });
    }

    const getDate = () => {
      let today = new Date();
      let d, m, y;

      d = today.getDate();
      m = today.getMonth() + 1;
      y = today.getFullYear();

      if (d < 10) {
        d = "0" + d;
      }

      if (m < 10) {
        m = "0" + m;
      }

      return `${m}/${d}`;
    };

    const newRound = new Round({
      owner: req.user.username,
      league: league,
      course: playedCourse,
      scores: roundScores,
      date: getDate()
    });

    newRound.save().then(round => {
      Course.findOne({ name: req.body.course }).then(course => {
        course.history.push(round);
        course.save().then(course => {
          for (let i = 0; i < round.scores.length; i++) {
            Profile.findOne({ username: round.scores[i].player })
              .then(profile => {
                profile.rounds.unshift(round);
                profile.save().then(profile => {
                  if (profile.courses) {
                    let courseExists = doesCourseExist(
                      profile.courses,
                      round.course.name
                    );
                    console.log(courseExists);
                    if (!courseExists) {
                      addCourseToProfile(req, res, errors);
                    }

                    let coursePlayed = getCoursePlayed(course);

                    coursePlayed.history = collectCourseHistory(
                      coursePlayed,
                      profile.rounds,
                      profile.username
                    );

                    let courseStats = getCourseStats(
                      coursePlayed.history,
                      round.course.tees,
                      coursePlayed.tees,
                      coursePlayed.terrain,
                      coursePlayed.landscape,
                      coursePlayed.holes
                    );

                    let courseRating = Math.ceil(getCourseRating(courseStats));

                    let userInfo = {
                      level: profile.level,
                      achievePoints: profile.achievePoints
                    };

                    let userScore = getUserScore(
                      round.scores,
                      profile.username
                    );

                    let userExp = getExp(
                      courseRating,
                      courseStats,
                      userInfo,
                      userScore
                    );

                    profile.exp = profile.exp + userExp;
                    profile.save().then(profile => res.json(profile));
                  }
                });
              })
              .catch(err => console.log(err));
          }
        });
      });
    });
  }
);

module.exports = router;

const doesCourseExist = (courses, name) => {
  let exists = false;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].name === name) {
      exists = true;
      break;
    }
  }
  return exists;
};

const getCoursePlayed = course => {
  const myCourse = {
    id: course._id,
    name: course.name,
    holes: course.holes,
    tees: course.tees,
    history: [],
    terrain: course.terrain,
    landscape: course.landscape
  };
  return myCourse;
};

const addCourseToProfile = (req, res, errors) => {
  Course.findOne({ name: req.body.course })
    .then(course => {
      if (!course) {
        errors.course = "That course does not exist in our database";
        res.status(404).json(errors);
      } else {
        Profile.findOne({ username: req.user.username }).then(profile => {
          for (let i = 0; i < profile.courses.length; i++) {
            if (req.body.course === profile.courses[i].name) {
              errors.course =
                "You have already added that course to your profile";
              return res.json(errors);
            }
          }

          for (let j = 0; j < course.tees.length; j++) {
            course.tees[j].avg = "N/A";
            course.tees[j].best = "N/A";
          }

          const myCourse = {
            id: course._id,
            name: course.name,
            holes: course.holes,
            tees: course.tees,
            history: [],
            terrain: course.terrain,
            landscape: course.landscape,
            latLong: course.latLong
          };

          profile.courses.unshift(myCourse);
          profile.save().catch(err => console.log(err));
        });
      }
    })
    .catch(err => console.log(err));
};

const collectCourseHistory = (course, roundHistory, username) => {
  let courseHistory = [];

  for (let j = 0; j < roundHistory.length; j++) {
    let round = {};
    if (roundHistory[j].course.name === course.name) {
      round.id = roundHistory[j]._id;
      round.date = roundHistory[j].date;
      round.league = roundHistory[j].league;
      round.tees = roundHistory[j].course.tees;

      for (let i = 0; i < roundHistory[j].scores.length; i++) {
        if (roundHistory[j].scores[i].player === username) {
          round.score = roundHistory[j].scores[i].score;
        }
      }

      courseHistory.push(round);
    }
  }
  return courseHistory;
};

const getCourseStats = (
  courseHistory,
  teesPlayed,
  courseTees,
  terrain,
  landscape,
  holes
) => {
  let stats = {};
  let scoresTotal = 0;
  let count = 0;
  let average;
  let best = 999;
  let teesHistory = [];
  let distance;
  let par;

  stats.tees = teesPlayed;

  for (let i = 0; i < courseTees.length; i++) {
    if (courseTees[i].tee === teesPlayed) {
      distance = courseTees[i].distance;
      par = courseTees[i].par;
    }
  }

  for (let i = 0; i < courseHistory.length; i++) {
    if (courseHistory[i].tees === teesPlayed) {
      teesHistory.push(courseHistory[i]);
    }
  }

  if (teesHistory.length <= 1) {
    stats.average = "N/A";
    stats.best = "N/A";
  } else {
    for (let i = 1; i < teesHistory.length; i++) {
      scoresTotal = scoresTotal + parseInt(teesHistory[i].score);
      count++;
      if (teesHistory[i].score < best) {
        best = teesHistory[i].score;
      }
    }
    average = scoresTotal / count;
    stats.average = Math.ceil(average);
    stats.best = best;
  }
  stats.distance = parseInt(distance);
  stats.par = parseInt(par);
  stats.terrain = terrain;
  stats.landscape = landscape;
  stats.holes = holes;
  return stats;
};

const getUserScore = (scores, username) => {
  for (let i = 0; i < scores.length; i++) {
    if (scores[i].player === username) {
      return parseInt(scores[i].score);
    }
  }
};
