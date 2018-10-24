const express = require("express");
const router = express.Router();

// @route   GET api/achievements/test
// @desc    Tests achievements route
// @access  Public
router.get("/test", (rez, res) => res.json({ msg: "Achievements Works" }));

module.exports = router;
