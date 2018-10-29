const express = require("express");
const router = express.Router();
const passport = require("passport");

const Round = require("../../models/Round");
const Profile = require("../../models/Profile");
const Course = require("../../models/Course");

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
        course.history.push(round);
        course.save().then(course => {
          for (let i = 0; i < round.scores.length; i++) {
            Profile.findOne({ username: round.scores[i].player }).then(
              profile => {
                profile.rounds.push(round);
                profile.save();
              }
            );
          }
        });
      });
      res.json(round);
    });
  }
);

module.exports = router;
