const express = require("express");
const router = express.Router();

// @route   GET api/leagues/test
// @desc    Tests leagues route
// @access  Public
router.get("/test", (rez, res) => res.json({ msg: "Leagues Works" }));

module.exports = router;
