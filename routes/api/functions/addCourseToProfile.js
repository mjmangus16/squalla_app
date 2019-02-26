const getCourseRating = require("./getCourseRating");

const addCourseToProfile = (course, profile) => {
  const myCourse = {
    id: course._id,
    name: course.name,
    holes: course.holes,
    tees: [],
    terrain: course.terrain,
    landscape: course.landscape,
    latLong: course.latLong
  };

  for (let i = 0; i < course.tees.length; i++) {
    const teeData = {
      pin: course.tees[i].tee,
      par: course.tees[i].par,
      distance: course.tees[i].distance,
      average: "",
      best: "",
      rating: Math.round(
        getCourseRating(
          course.tees[i].distance,
          course.terrain,
          course.landscape,
          course.holes
        )
      )
    };
    myCourse.tees.push(teeData);
  }
  profile.courses.push(myCourse);
  return profile;
};

module.exports = addCourseToProfile;
