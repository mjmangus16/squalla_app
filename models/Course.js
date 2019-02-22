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
  tees: {
    type: Array,
    required: true
  },
  // Terrain
  //    (1) Lightly Wooded
  //    (2) Moderately Wooded
  //    (3) Heavily Wooded
  terrain: {
    type: Number
  },
  // Landscape
  //    (1) Mostly Flat
  //    (2) Moderately Hilly
  //    (3) Very Hilly
  landscape: {
    type: Number
  },
  latLong: {
    type: String
  }
});

module.exports = Course = mongoose.model("courses", CourseSchema);
