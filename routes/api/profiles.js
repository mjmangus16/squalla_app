const express = require("express");
const router = express.Router();
const passport = require("passport");

const Course = require("../../models/Course");
const Profile = require("../../models/Profile");

// Load Input Validation
const validateProfileInput = require("../../validation/profile");

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

// @route   GET api/profiles/current
// @desc    Get current profile
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      res.json(profile);
    });
  }
);

//                        ************* HOME **************

// // @route   GET api/profiles/home/dashboard
// // @desc    Get dashboard data
// // @access  Private
// router.get(
//   "/home/dashboard",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     Profile.findOne({ username: req.user.username }).then(profile => {
//       const myScore = () => {
//         for (let i = 0; i < profile.rounds[0].scores.length; i++) {
//           if (profile.rounds[0].scores[i].player === profile.username) {
//             return profile.rounds[0].scores[i].score;
//           }
//         }
//       };

//       for (let j = 0; j < profile.rounds.length; j++) {
//         for (let k = 0; k < profile.courses.length; k++) {
//           if (profile.rounds[j].course.name === profile.courses[k].name) {
//             profile.courses[k].history.unshift(profile.rounds[j]);
//           }
//         }
//       }

//       let coursesPlayed = 0;

//       for (let y = 0; y < profile.courses.length; y++) {
//         if (profile.courses[y].history.length > 0) {
//           coursesPlayed++;
//         }
//       }

//       let dashboard = {
//         level: profile.level,
//         exp: profile.exp,
//         username: profile.username,
//         roundsPlayed: profile.rounds.length,
//         coursesPlayed: coursesPlayed,
//         achievePoints: profile.achievePoints
//       };

//       if (profile.rounds[0]) {
//         dashboard.recentRound = {
//           date: profile.rounds[0].date,
//           course: profile.rounds[0].course.name,
//           tees: profile.rounds[0].course.tees,
//           score: myScore()
//         };
//       } else {
//         dashboard.recentRound = {
//           date: "N/A",
//           course: "N/A",
//           tees: "N/A",
//           score: "N/A"
//         };
//       }

//       if (profile.achievements[0]) {
//         dashboard.recentAchieve = profile.achievements[0];
//       } else {
//         dashboard.recentAchieve = "N/A";
//       }

//       profile.save().then(profile => res.json(dashboard));
//     });
//   }
// );

// @route   GET api/profiles/home/achievements/all
// @desc    Get all achievements earned
// @access  Private
router.get(
  "/home/achievements/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      res.json(profile.achievements);
    });
  }
);

// // @route   GET api/profiles/home/rounds/all
// // @desc    Get all rounds
// // @access  Private
// router.get(
//   "/home/rounds/all",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     Profile.findOne({ username: req.user.username }).then(profile => {
//       let myScore = i => {
//         for (let j = 0; j < profile.rounds[i].scores.length; j++) {
//           if (profile.rounds[i].scores[j].player === profile.username) {
//             return profile.rounds[i].scores[j].score;
//           }
//         }
//       };
//       let roundsData = [];
//       for (let i = 0; i < profile.rounds.length; i++) {
//         roundsData.push({
//           date: profile.rounds[i].date,
//           course: profile.rounds[i].course.name,
//           tees: profile.rounds[i].course.tees,
//           myScore: myScore(i),
//           players: profile.rounds[i].scores.length,
//           roundScores: profile.rounds[i].scores,
//           owner: profile.rounds[i].owner,
//           league: profile.rounds[i].league
//         });
//       }
//       res.json(roundsData);
//     });
//   }
// );

//                        ************* COURSES **************

// @route   POST api/profiles/courses/add
// @desc    Post a course to user profile
// @access  Private
router.post(
  "/courses/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput.course(req.body);
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    Course.findOne({ name: req.body.name })
      .then(course => {
        if (!course) {
          errors.course = `${req.body.course} does not exist in our database`;
          res.status(404).json(errors);
        } else {
          Profile.findOne({ username: req.user.username }).then(profile => {
            for (let i = 0; i < profile.courses.length; i++) {
              if (req.body.name === profile.courses[i].name) {
                errors.course = `You have already added ${
                  req.body.name
                } to your profile`;
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
            profile
              .save()
              .then(profile => {
                data = {
                  course: `${myCourse.name} has been added to your profile`
                };
                return res.json(data);
              })
              .catch(err => console.log(err));
          });
        }
      })
      .catch(err => console.log(err));
  }
);

// // @route   GET api/profiles/courses/all
// // @desc    Get all user courses
// // @access  Private
// router.get(
//   "/courses/all",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     Profile.findOne({ username: req.user.username }).then(profile => {
//       for (let i = 0; i < profile.courses.length; i++) {
//         for (let j = 0; j < profile.rounds.length; j++) {
//           if (profile.courses[i].name === profile.rounds[j].course.name) {
//             profile.courses[i].history.unshift(profile.rounds[j]);
//           }
//         }
//       }
//       res.json(profile.courses);
//     });
//   }
// );

// @route   GET api/profiles/courses/name/:name
// @desc    Get a specific course by name
// @access  Private
router.get(
  "/courses/name/:name",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      let selectedCourse;
      for (let i = 0; i < profile.courses.length; i++) {
        if (profile.courses[i].name === req.params.name) {
          selectedCourse = profile.courses[i];
          let course = profile.courses[i];
          for (let j = 0; j < profile.rounds.length; j++) {
            if (profile.rounds[j].course.name === course.name) {
              course.history.push(profile.rounds[j]);
            }
          }
        }
      }
      for (let i = 0; i < selectedCourse.history.length; i++) {
        for (let y = 0; y < selectedCourse.history[i].scores.length; y++) {
          if (
            selectedCourse.history[i].scores[y].player === req.user.username
          ) {
            selectedCourse.history[i].myScore =
              selectedCourse.history[i].scores[y].score;
          }
        }
      }
      res.json(selectedCourse.history);
    });
  }
);

//                        ************* FRIENDS **************

// @route   POST api/profiles/friends/add
// @desc    Post a friend to user profile
// @access  Private
router.post(
  "/friends/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput.friend(req.body);
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    Profile.findOne({ username: req.body.username }).then(username => {
      if (!username) {
        errors.user = `${req.body.username} does not exist in our database`;
        res.status(404).json(errors);
      } else {
        Profile.findOne({ username: req.user.username })
          .then(profile => {
            for (let i = 0; i < profile.friends.length; i++) {
              if (req.body.username === profile.friends[i]) {
                errors.friend = `${
                  req.body.username
                } has already been added to your profile`;
                return res.json(errors);
              }
            }
            if (req.body.username !== req.user.username) {
              profile.friends.push(username.username);
              profile
                .save()
                .then(profile => {
                  Profile.findOne({ username: req.body.username }).then(
                    friend => {
                      friend.friends.push(profile.username);
                      friend.save().then(friend => {
                        data = {
                          friend: `${
                            friend.username
                          } has been added to your friends list`
                        };
                        return res.json(data);
                      });
                    }
                  );
                  res.j;
                })
                .catch(err => res.json(err));
            } else {
              errors.friend = "You do not need to add yourself to your profile";
              res.json(errors);
            }
          })
          .catch(err => res.json(err));
      }
    });
  }
);

// // @route   GET api/profiles/friends/all
// // @desc    Get all friends
// // @access  Private
// router.get(
//   "/friends/all",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     Profile.findOne({ username: req.user.username }).then(user =>
//       res.json(user.friends)
//     );
//   }
// );

// @route   GET api/profiles/friends/name/:name
// @desc    Get a specific friend
// @access  Private
router.get(
  "/friends/name/:name",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ username: req.params.name }).then(profile => {
      if (!profile) {
        errors.friendFail = `${req.params.name} does not exist in our database`;
        return res.json(errors);
      } else {
        const myScore = () => {
          for (let i = 0; i < profile.rounds[0].scores.length; i++) {
            if (profile.rounds[0].scores[i].player === profile.username) {
              return profile.rounds[0].scores[i].score;
            }
          }
        };

        for (let j = 0; j < profile.rounds.length; j++) {
          for (let k = 0; k < profile.courses.length; k++) {
            if (profile.rounds[j].course.name === profile.courses[k].name) {
              profile.courses[k].history.unshift(profile.rounds[j]);
            }
          }
        }

        let coursesPlayed = 0;

        for (let y = 0; y < profile.courses.length; y++) {
          if (profile.courses[y].history.length > 0) {
            coursesPlayed++;
          }
        }

        let dashboard = {
          level: profile.level,
          exp: profile.exp,
          username: profile.username,
          roundsPlayed: profile.rounds.length,
          coursesPlayed: coursesPlayed,
          achievePoints: profile.achievePoints
        };

        if (profile.rounds[0]) {
          dashboard.recentRound = {
            date: profile.rounds[0].date,
            course: profile.rounds[0].course.name,
            tees: profile.rounds[0].course.tees,
            score: myScore()
          };
        } else {
          dashboard.recentRound = {
            date: "N/A",
            course: "N/A",
            tees: "N/A",
            score: "N/A"
          };
        }

        if (profile.achievements) {
          dashboard.achievementsEarned = profile.achievements.length;
        }

        return res.json(dashboard);
      }
    });
  }
);

//                        ************* LEAGUES **************

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

//                      **************** ACHIEVEMENTS ***************

// @route   GET api/profiles/achievements/all
// @desc    Get all user leagues
// @access  Private

module.exports = router;
