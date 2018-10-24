const express = require("express");
const router = express.Router();

// @route   GET api/submitRound/test
// @desc    Tests submitRound route
// @access  Public
router.get("/test", (rez, res) => res.json({ msg: "submitRound Works" }));

module.exports = router;
