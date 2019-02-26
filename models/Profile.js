const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true,
    default: 1
  },
  experience: {
    type: Number,
    required: true,
    default: 0
  },
  achievementPoints: {
    type: Number,
    required: true,
    default: 0
  },
  performancePoints: {
    type: Number,
    default: 0,
    required: true
  },
  courses: {
    type: Array,
    required: true,
    default: []
  },
  friends: {
    type: Array,
    required: true,
    default: []
  },
  rounds: {
    type: Array,
    required: true,
    default: []
  },
  leagues: {
    type: Array,
    required: true,
    default: []
  },
  achievements: {
    type: Array,
    required: true,
    default: []
  },
  snapshot: {
    type: Object,
    required: true,
    default: {
      level: 1,
      experience: 0,
      achievementPoints: 0,
      performancePoints: 0,
      rounds: []
    }
  }
});

module.exports = Profile = mongoose.model("profiles", ProfileSchema);
