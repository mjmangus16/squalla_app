const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoundSchema = new Schema({
  owner: {
    type: String,
    required: true
  },
  league: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  course: {
    type: Object,
    required: true
  },
  scores: {
    type: Array,
    required: true
  }
});

module.exports = Round = mongoose.model("rounds", RoundSchema);
