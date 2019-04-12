const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require("../../models/Profile");
const Achievement = require("../../models/Achievement");

const getRoundsPerFriend = require("./functions/friends/getRoundsPerFriend");
const getRecentRound = require("./functions/friends/getRecentRound");

// @route   GET api/friends/
// @desc    Post course to database
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Achievement.findOne({ code: 11 })
      .then(achievement => {
        Profile.findOne({ username: req.user.username })
          .then(profile => {
            let achieveData = {};
            const data = {
              roundsPerFriend: getRoundsPerFriend(profile)
            };

            const popularityContestEarned = determinePopularityContestEarned(
              profile.achievements
            );

            let date = new Date();

            let year = date.getFullYear();

            let fullDate = `${date.getMonth() +
              1}/${date.getDate()}/${year.toString().substr(-2)}`;

            if (!popularityContestEarned) {
              achieveData = popularityContestRequirementsMet(
                profile.friends,
                0
              );
              if (achieveData.points > 0) {
                achievement.count = achieveData.count;
                profile.achievements.push(achievement);
                profile.achievementPoints =
                  profile.achievementPoints + achieveData.points;
                profile.notifications.other.push({
                  type: "achievementEarned",
                  data: {
                    name: achievement.name,
                    description: achievement.description,
                    points: achieveData.points,
                    date: fullDate
                  }
                });
              }
            } else {
              let count;
              for (let i = 0; i < profile.achievements.length; i++) {
                if (profile.achievements[i].code === 11) {
                  count = profile.achievements[i].count;

                  achieveData = popularityContestRequirementsMet(
                    profile.friends,
                    count
                  );
                  if (achieveData.count > count) {
                    profile.achievements[i].count = achieveData.count;
                    profile.achievementPoints =
                      profile.achievementPoints + achieveData.points;
                    profile.notifications.other.push({
                      type: "achievementEarned",
                      data: {
                        name: achievement.name,
                        description: achievement.description,
                        points: achieveData.points,
                        date: fullDate
                      }
                    });
                  }
                }
              }
            }
            profile.markModified("achievements");
            profile.markModified("notifications");
            profile.save();
            return res.json(data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
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

const determinePopularityContestEarned = achieves => {
  let earned = false;

  for (let i = 0; i < achieves.length; i++) {
    if (achieves[i].code === 11) {
      earned = true;
    }
  }
  return earned;
};

const popularityContestRequirementsMet = (friends, count) => {
  let points = 0;
  if (count === 0) {
    if (friends.length >= 5) {
      count++;
      points = points + 5;
    }
    if (friends.length >= 10) {
      count++;
      points = points + 5;
    }
    if (friends.length >= 25) {
      count++;
      points = points + 5;
    }
  } else if (count === 1) {
    if (friends.length >= 10) {
      count++;
      points = points + 5;
    }
    if (friends.length >= 25) {
      count++;
      points = points + 5;
    }
  } else if (count === 2) {
    if (friends.length >= 25) {
      count++;
      points = points + 5;
    }
  }

  return {
    count,
    points
  };
};
