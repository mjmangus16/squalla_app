const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require("../../models/Profile");

// Functions
const getTotalRounds = require("./functions/courses/getTotalRounds");

// Load Input Validation
const validateProfileInput = require("../../validation/profile");

// @route   GET api/courses/
// @desc    Get users courses
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      const data = profile.courses.map(course => ({
        name: course.name,
        city: course.city,
        state: course.state,
        holes: course.holes,
        distance: course.distance,
        foliage: course.foliage,
        elevation: course.elevation,
        totalRounds: getTotalRounds(course.tees),
        tees: course.tees.map(tee => ({
          tee: tee.tee,
          par: tee.par,
          best: tee.best,
          average: tee.average,
          rounds: tee.rounds
        }))
      }));

      return res.json(data);
    });
  }
);

// @route   POST api/courses/add
// @desc    Post course to database
// @access  Private
router.post(
  "/addcourse",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ username: req.user.username }).then(profile => {
      if (!profile) {
        errors.addCourse =
          "There was an issue with adding that course to your profile.";
        return res.json(errors);
      } else {
        for (let i = 0; i < profile.courses.length; i++) {
          if (profile.courses[i].name === req.body.name) {
            errors.addCourse =
              "That course has already been added to your profile";
            return res.json(errors);
          }
        }
        let course = {
          name: req.body.name,
          city: req.body.city,
          state: req.body.state,
          holes: req.body.holes,
          distance: req.body.distance,
          foliage: req.body.foliage,
          elevation: req.body.elevation,
          tees: [
            {
              tee: "Red",
              par: req.body.par1 !== "" ? req.body.par1 : "N/A",
              best: "",
              average: "",
              rounds: 0
            },
            {
              tee: "White",
              par: req.body.par2 !== "" ? req.body.par2 : "N/A",
              best: "",
              average: "",
              rounds: 0
            },
            {
              tee: "Blue",
              par: req.body.par3 !== "" ? req.body.par3 : "N/A",
              best: "",
              average: "",
              rounds: 0
            },
            {
              tee: "Gold",
              par: req.body.par4 !== "" ? req.body.par4 : "N/A",
              best: "",
              average: "",
              rounds: 0
            }
          ]
        };

        profile.courses.unshift(course);
        profile.save().then(() => {
          return res.json(true);
        });
      }
    });
  }
);

// @route   POST api/courses/update
// @desc    Update the pars for a course
// @access  Private
router.post(
  "/editcourse",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ username: req.user.username }).then(profile => {
      for (let i = 0; i < profile.courses.length; i++) {
        if (profile.courses[i].name === req.body.course) {
          for (let y = 0; y < profile.courses[i].tees.length; y++) {
            if (profile.courses[i].tees[y].tee === "Red") {
              if (req.body.redPar) {
                profile.courses[i].tees[y].par = req.body.redPar;
              }
            }
            if (profile.courses[i].tees[y].tee === "White") {
              if (req.body.whitePar) {
                profile.courses[i].tees[y].par = req.body.whitePar;
              }
            }
            if (profile.courses[i].tees[y].tee === "Blue") {
              if (req.body.bluePar) {
                profile.courses[i].tees[y].par = req.body.bluePar;
              }
            }
            if (profile.courses[i].tees[y].tee === "Gold") {
              if (req.body.goldPar) {
                profile.courses[i].tees[y].par = req.body.goldPar;
              }
            }
          }
        }
      }
      profile.markModified("courses");
      profile.save().then(() => res.json(true));
    });
  }
);

module.exports = router;
