const express = require("express");
const router = express.Router();
const passport = require("passport");

const Course = require("../../models/Course");

// @route   GET api/courses/test
// @desc    Tests courses route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Courses Works" }));

// @route   POST api/courses/add
// @desc    Post course to database
// @access  Private
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Course.findOne({ name: req.body.name }).then(course => {
      if (course) {
        return res
          .status(400)
          .json({ course: "Course is already in database" });
      } else {
        const pars = {};

        if (req.body.gold) {
          pars.gold = req.body.gold;
        }
        if (req.body.blue) {
          pars.blue = req.body.blue;
        }
        if (req.body.white) {
          pars.white = req.body.white;
        }
        if (req.body.red) {
          pars.red = req.body.red;
        }

        const newCourse = new Course({
          name: req.body.name,
          holes: req.body.holes,
          par: pars,
          history: []
        });

        newCourse
          .save()
          .then(course => res.json(course))
          .catch(err => console.log(err));
      }
    });
  }
);

// @route   GET api/courses/courses
// @desc    Get all courses from database
// @access  Private
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Course.find().then(courses => {
      res.json(courses);
    });
  }
);

// @route   GET api/courses/name/:name
// @desc    Get course by name from database
// @access  Private
router.get(
  "/name/:name",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Course.findOne({ name: req.params.name })
      .then(course => {
        if (!course) {
          res
            .status(404)
            .json({ course: "That course is not in our database" });
        }
        res.json(course);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
