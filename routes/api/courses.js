const express = require("express");
const router = express.Router();
const passport = require("passport");

const Course = require("../../models/Course");
const Pofile = require("../../models/Profile");

// Functions
const getCourseRating = require("./functions/getCourseRating");

// Load Input Validation
const validateProfileInput = require("../../validation/profile");

// @route   POST api/courses/add
// @desc    Post course to database
// @access  Private
router.post(
  "/add",
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

            const myCourse = {
              id: course._id,
              name: course.name,
              holes: course.holes,
              tees: [],
              terrain: course.terrain,
              landscape: course.landscape,
              latLong: course.latLong
            };

            for (let i = 0; i < course.tees.length; i++) {
              const teeData = {
                pin: course.tees[i].tee,
                par: course.tees[i].par,
                distance: course.tees[i].distance,
                average: "",
                best: "",
                rating: Math.round(
                  getCourseRating(
                    course.tees[i].distance,
                    course.terrain,
                    course.landscape,
                    course.holes
                  )
                )
              };
              myCourse.tees.push(teeData);
            }

            profile.courses.unshift(myCourse);
            profile
              .save()
              .then(() => {
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

module.exports = router;
