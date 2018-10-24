const express = require("express");
const router = express.Router();

// @route   GET api/courses/test
// @desc    Tests courses route
// @access  Public
router.get("/test", (rez, res) => res.json({ msg: "Courses Works" }));

module.exports = router;
