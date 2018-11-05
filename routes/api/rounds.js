const express = require("express");
const router = express.Router();
const passport = require("passport");

const Round = require("../../models/Round");
const Profile = require("../../models/Profile");
const Course = require("../../models/Course");

const expGained = require("../../functions/leveling/expGained");
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

    const newRound = new Round({
      owner: req.user.username,
      league: league,
      course: playedCourse,
      scores: roundScores
    });

    newRound.save().then(round => {
      Course.findOne({ name: req.body.course }).then(course => {
        let coursePar;
        if (round.course.tees === "gold") {
          coursePar = course.par.gold;
        } else if (round.course.tees === "blue") {
          coursePar = course.par.blue;
        } else if (round.course.tees === "white") {
          coursePar = course.par.white;
        } else if (round.course.tees == "red") {
          coursePar = course.par.red;
        }

        course.history.push(round);
        course.save().then(course => {
          for (let i = 0; i < round.scores.length; i++) {
            Profile.findOne({ username: round.scores[i].player })
              .then(profile => {
                let courseAverage = 0;
                let userScore = round.scores[i].score;
                let bestScore = 0;

                for (let j = 0; j < profile.courses.length; j++) {
                  if (profile.courses[j].name === round.course.name) {
                    // Pushes rounds into the course history
                    for (let k = 0; k < profile.rounds.length; k++) {
                      if (profile.rounds[k].course.name === round.course.name) {
                        profile.courses[j].history.push(profile.rounds[k]);
                      }
                    }

                    // Gets averages and best from course history
                    let parCount = 0;
                    let roundCount = 0;

                    for (
                      let h = 0;
                      h < profile.courses[j].history.length;
                      h++
                    ) {
                      if (
                        profile.courses[j].history[h].course.tees ===
                        round.course.tees
                      ) {
                        roundCount = roundCount + 1;
                        for (
                          let p = 0;
                          p < profile.courses[j].history[h].scores.length;
                          p++
                        ) {
                          if (
                            profile.courses[j].history[h].scores[p].player ===
                            round.scores[i].player
                          ) {
                            if (
                              bestScore === 0 ||
                              bestScore >
                                parseInt(
                                  profile.courses[j].history[h].scores[p].score
                                )
                            ) {
                              bestScore =
                                profile.courses[j].history[h].scores[p].score;
                            }

                            parCount += parseInt(
                              profile.courses[j].history[h].scores[p].score
                            );
                          }
                        }
                      }
                    }
                    courseAverage = parCount / roundCount;
                  }
                }
                profile.exp = Math.round(
                  profile.exp +
                    expGained(
                      profile.level,
                      profile.achievePoints,
                      coursePar,
                      course.holes,
                      Math.round(courseAverage),
                      Math.round(bestScore),
                      userScore
                    )
                );
                profile.rounds.unshift(round);
                profile.level = levels(profile.exp);
                profile.save();
              })
              .catch(err => console.log(err));
          }
        });
      });
      res.json(round);
    });
  }
);

module.exports = router;
