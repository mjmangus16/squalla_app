const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../../models/User");
const Profile = require("../../models/Profile");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (rez, res) => res.json({ msg: "Users Works" }));

// @route   GET api/users/register
// @desc    Register User
// @access  Public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(email => {
    if (email) {
      return res.status(400).json({ email: "Email already in use" });
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const newProfile = new Profile({
                username: user.username,
                dashboard: {
                  nickname: "",
                  roundsPlayed: 0,
                  coursesPlayed: 0,
                  achievement: {},
                  recentRound: {}
                },
                courses: [],
                friends: [],
                rounds: [],
                leagues: [],
                achievements: []
              });

              newProfile.save().then(profile => res.json(profile));
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
