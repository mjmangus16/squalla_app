const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LeagueSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  availability: {
    type: String,
    required: true
  },
  roster: {
    type: Array,
    required: true,
    default: []
  },
  rosterData: {
    type: Array,
    required: true,
    default: []
  }
});

module.exports = League = mongoose.model("leagues", LeagueSchema);
