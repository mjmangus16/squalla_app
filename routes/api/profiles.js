const express = require("express");
const router = express.Router();
const passport = require("passport");

const Course = require("../../models/Course");
const Profile = require("../../models/Profile");

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

// @route   GET api/profiles/home/dashboard
// @desc    Get dashboard data
// @access  Private
router.get(
  "/home/dashboard",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      const myScore = () => {
        for (let i = 0; i < profile.rounds[0].scores.length; i++) {
          if (profile.rounds[0].scores[i].player === profile.username) {
            return profile.rounds[0].scores[i].score;
          }
        }
      };

      let dashboard = {
        username: profile.username,
        roundsPlayed: profile.rounds.length,
        coursesPlayed: profile.courses.length,
        recentAchieve: profile.achievements[0],
        recentRound: {
          date: profile.rounds[0].date,
          course: profile.rounds[0].course.name,
          tees: profile.rounds[0].course.tees,
          score: myScore()
        }
      };
      res.json(dashboard);
    });
  }
);

// @route   POST api/profiles/courses/add
// @desc    Post a course to user profile
// @access  Private
router.post(
  "/courses/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Course.findOne({ name: req.body.name })
      .then(course => {
        if (!course) {
          res
            .status(404)
            .json({ course: "That course is not in our database" });
        } else {
          Profile.findOne({ username: req.user.username }).then(profile => {
            for (let i = 0; i < profile.courses.length; i++) {
              if (req.body.name === profile.courses[i].name) {
                return res.json({
                  course: "You have already added that course to your profile."
                });
              }
            }

            const myCourse = {
              id: course._id,
              name: course.name,
              holes: course.holes,
              par: course.par,
              history: []
            };

            profile.courses.unshift(myCourse);
            profile
              .save()
              .then(profile => res.json(profile))
              .catch(err => console.log(err));
          });
        }
      })
      .catch(err => console.log(err));
  }
);

// @route   GET api/profiles/courses/all
// @desc    Get all user courses
// @access  Private
router.get(
  "/courses/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      for (let i = 0; i < profile.courses.length; i++) {
        for (let j = 0; j < profile.rounds.length; j++) {
          if (profile.courses[i].name === profile.rounds[j].course.name) {
            profile.courses[i].history.push(profile.rounds[j]);
          }
        }
      }
      res.json(profile);
    });
  }
);

// @route   GET api/profiles/courses/name/:name
// @desc    Get a specific course by name
// @access  Private
router.get(
  "/courses/name/:name",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      for (let i = 0; i < profile.courses.length; i++) {
        if (profile.courses[i].name === req.params.name) {
          let course = profile.courses[i];
          for (let j = 0; j < profile.rounds.length; j++) {
            if (profile.rounds[j].course.name === course.name) {
              course.history.push(profile.rounds[j]);
            }
          }
        }
      }
      res.json(profile);
    });
  }
);

// @route   POST api/profiles/friends/add
// @desc    Post a friend to user profile
// @access  Private
router.post(
  "/friends/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.body.username }).then(username => {
      if (!username) {
        res.status(404).json({ user: "That user does not exist." });
      } else {
        Profile.findOne({ username: req.user.username })
          .then(profile => {
            for (let i = 0; i < profile.friends.length; i++) {
              if (req.body.username === profile.friends[i]) {
                return res.json({
                  user: "That user has already been added to your friends."
                });
              }
            }
            if (req.body.username !== req.user.username) {
              profile.friends.push(req.body.username);
              profile
                .save()
                .then(profile => res.json(profile))
                .catch(err => res.json(err));
            } else {
              res.json({
                user: "You do not need to add yourself to your profile."
              });
            }
          })
          .catch(err => res.json(err));
      }
    });
  }
);

// @route   GET api/profiles/friends/all
// @desc    Get all friends data
// @access  Private
router.get(
  "/friends/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      let myFriendsData = [];
      for (let i = 0; i < profile.friends.length; i++) {
        Profile.findOne({ username: profile.friends[i] }).then(friend => {
          myFriendsData.push({
            username: profile.friends[i],
            roundsPlayed: friend.rounds.length,
            coursesPlayed: friend.courses.length,
            recentAchieve: friend.achievements[0],
            recentRound: friend.rounds[0]
          });
          res.json(myFriendsData);
        });
      }
    });
  }
);

// @route   GET api/profiles/friends/name/:name
// @desc    Get a specific friend
// @access  Private
router.get(
  "/friends/name/:name",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      let myFriendsData = [];
      for (let i = 0; i < profile.friends.length; i++) {
        if (profile.friends[i] === req.params.name) {
          Profile.findOne({ username: profile.friends[i] }).then(friend => {
            myFriendsData.push({
              username: profile.friends[i],
              roundsPlayed: friend.rounds.length,
              coursesPlayed: friend.courses.length,
              recentAchieve: friend.achievements[0],
              recentRound: friend.rounds[0]
            });
            res.json(myFriendsData);
          });
        }
      }
    });
  }
);

// @route   GET api/profiles/leagues
// @desc    Get all user leagues
// @access  Private
router.get(
  "/leagues/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      res.json(profile.leagues);
    });
  }
);

module.exports = router;
