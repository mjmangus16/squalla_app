const express = require("express");
const router = express.Router();

const League = require("../../models/League");

// @route   GET api/leagues/test
// @desc    Tests leagues route
// @access  Public
router.get("/test", (rez, res) => res.json({ msg: "Leagues Works" }));

// @route   POST api/leagues/add
// @desc    Add a League to database
// @access  Public
router.post("/add", (req, res) => {
  League.findOne({ name: req.body.name }).then(league => {
    if (league) {
      return res.status(400).json({ league: "League is already in database" });
    } else {
      const newLeague = new League({
        name: req.body.name,
        type: req.body.type,
        availability: req.body.availability
      });

      newLeague
        .save()
        .then(league => res.json(league))
        .catch(err => console.log(err));
    }
  });
});

// @route   POST api/leagues/:id/members/add
// @desc    Add a member to a league
// @access  Public
router.post("/:id/members/add", (req, res) => {
  League.findById(req.params.id).then(league => {
    if (!league) {
      return res
        .status(400)
        .json({ league: "That League does not exist in our database" });
    } else {
      Profile.findOne({ username: req.body.username }).then(profile => {
        if (!profile) {
          return res
            .status(400)
            .json({ league: "That profile does not exist in our database" });
        } else {
          let userData = leagueType(
            league.type,
            profile.username,
            league.roster.length
          );
          if (league.roster.includes(profile.username)) {
            return res.status(400).json({
              league: "That user has already been added to this league"
            });
          } else {
            profile.leagues.push({
              name: league.name,
              type: league.type,
              id: league.id,
              availability: league.availability
            });
            profile.save();
            league.roster.push(profile.username);
            league.rosterData.push(userData);
            league
              .save()
              .then(league => res.json(league))
              .catch(err => console.log(err));
          }
        }
      });
    }
  });
});

// @route   GET api/leagues/id/:id
// @desc    Get a league by id
// @access  Public
router.get("/id/:id", (req, res) => {
  League.findOne(req.params.id).then(league => {
    return res.json(league);
  });
});

// @route   GET api/leagues/name/:name
// @desc    Get a league by name
// @access  Public
router.get("/name/:name", (req, res) => {
  League.findOne({ name: req.params.name }).then(league => {
    return res.json(league);
  });
});

const leagueType = (type, username, members) => {
  let data = {};

  if (type === "Tag") {
    data = {
      username: username,
      tag: members + 1
    };

    return data;
  }
};

module.exports = router;
