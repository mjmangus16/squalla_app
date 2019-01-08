const express = require("express");
const router = express.Router();

const Achievement = require("../../models/Achievement");

// @route   GET api/achievements/test
// @desc    Tests achievements route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Achievements Works" }));

// @route   GET api/achievements/all
// @desc    Get all achievements from database
// @access  Public
router.get("/all", (req, res) => {
  Achievement.find().then(data => res.json(data));
});

// @route   GET api/achievements/code
// @desc    Get achievement by code
// @access  Public
router.get("/code/:code", (req, res) => {
  Achievement.findOne({ code: req.params.code }).then(achieve =>
    res.json(achieve)
  );
});

module.exports = router;
