const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  username: {
    type: String
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
    achievements: {
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
