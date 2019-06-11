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
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  scores: {
    type: Array,
    required: true
  },
  holes: {
    type: Number,
    required: true
  },
  tees: {
    type: String,
    required: true
  }
});

module.exports = Round = mongoose.model("rounds", RoundSchema);
