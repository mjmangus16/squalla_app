const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

const User = require("../../models/User");
const Profile = require("../../models/Profile");

// Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (rez, res) => res.json({ msg: "Users Works" }));

// @route   POST api/users/register
// @desc    Register User
// @access  Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(email => {
    if (email) {
      errors.email = "Email already exists";
      return res.status(400).json({ errors });
    } else {
      User.findOne({ username: req.body.username }).then(username => {
        if (username) {
          errors.username = "Username already exists";
          return res.status(400).json({ errors });
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
                    achievements: [],
                    level: 1,
                    exp: 0
                  });

                  newProfile.save().then(profile => res.json(profile));
                })
                .catch(err => console.log(err));
            });
          });
        }
      });
    }
  });
});

// @route   POST api/users/login
// @desc    Login User
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.login = "User not found";
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched

        const payload = {
          id: user.id,
          username: user.username
        };

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 7200 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password is incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

// @route   GET api/users/all
// @desc    Get all users
// @access  Public
router.get("/all", (req, res) => {
  User.find().then(users => {
    let usernames = users.map(user => user.username);
    res.json({ usernames });
  });
});

module.exports = router;
