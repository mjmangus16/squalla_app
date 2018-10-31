const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  username: {
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
  dashboard: {
    nickname: {
      type: String
    },
    roundsPlayed: {
      type: Number
    },
    coursesPlayed: {
      type: Number
    },
    achievement: {
      type: Object
    },
    recentRound: {
      type: Object
    }
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
