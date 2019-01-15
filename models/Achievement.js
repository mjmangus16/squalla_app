const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AchievementSchema = new Schema({
  code: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  limit: {
    type: Boolean,
    required: true
  },
  count: {
    type: Number,
    required: true,
    default: 0
  },
  hidden: {
    type: Boolean,
    required: true,
    default: false
  },
  data: {
    type: Array,
    required: false
  }
});

module.exports = Achievement = mongoose.model(
  "achievements",
  AchievementSchema
);
