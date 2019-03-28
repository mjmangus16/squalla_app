const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require("../../models/Profile");

const getRoundsPerFriend = require("./functions/friends/getRoundsPerFriend");
const getRecentRound = require("./functions/friends/getRecentRound");

// @route   GET api/friends/
// @desc    Post course to database
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      const data = {
        roundsPerFriend: getRoundsPerFriend(profile)
      };

      return res.json(data);
    });
  }
);

// @route   GET api/friends/name
// @desc    Get friend by username
// @access  Private
router.post(
  "/name",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.body.name }).then(profile => {
      let data;
      if (!profile) {
        data = "That user does not exist in our database";
      } else {
        data = {
          username: profile.username,
          level: profile.level,
          achievementPoints: profile.achievementPoints,
          performancePoints: profile.performancePoints,
          recentRound: getRecentRound(profile.rounds, profile.username)
        };
      }

      return res.json(data);
    });
  }
);

// @route   POST api/friends/add
// @desc    Post course to database
// @access  Private
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // const { errors, isValid } = validateProfileInput.friend(req.body);
    // // Check Validation
    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }

    const errors = {};

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
                      friend.notifications.other.push({
                        type: "addFriend",
                        data: profile.username
                      });
                      friend.markModified("notifications");
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

module.exports = router;
