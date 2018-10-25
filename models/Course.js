const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  holes: {
    type: Number,
    required: true
  },
  par: {
    gold: {
      type: Number
    },
    blue: {
      type: Number
    },
    white: {
      type: Number
    },
    red: {
      type: Number
    }
  },
  history: {
    type: Array
  }
});

module.exports = Course = mongoose.model("courses", CourseSchema);
