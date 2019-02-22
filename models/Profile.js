const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  nickname: {
    type: String
  },
  level: {
    type: Number,
    required: true,
    default: 1
  },
  exp: {
    type: Number,
    required: true,
    default: 0
  },
  achievePoints: {
    type: Number,
    required: true,
    default: 0
  },
  performancePoints: {
    type: Number,
    default: 0,
    required: true
  },
  roundsPlayed: {
    type: Number,
    default: 0,
    required: true
  },
  coursesPlayed: {
    type: Number,
    default: 0,
    required: true
  },
  courses: {
    type: Array
  },
  friends: {
    type: Array
  },
  rounds: {
    type: Array
  },
  leagues: {
    type: Array
  },
  achievements: {
    type: Array
  }
});

module.exports = Profile = mongoose.model("profiles", ProfileSchema);
