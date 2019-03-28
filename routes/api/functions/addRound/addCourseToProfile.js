const getCourseRating = require("../addRound/getCourseRating");

const addCourseToProfile = (course, profile) => {
  let myCourse = {
    name: course.name,
    city: course.city,
    state: course.state,
    holes: course.holes,
    distance: course.distance,
    foliage: course.foliage,
    elevation: course.elevation,
    tees: [
      {
        tee: "Red",
        par: "N/A",
        best: "",
        average: "",
        rounds: 0
      },
      {
        tee: "White",
        par: "N/A",
        best: "",
        average: "",
        rounds: 0
      },
      {
        tee: "Blue",
        par: "N/A",
        best: "",
        average: "",
        rounds: 0
      },
      {
        tee: "Gold",
        par: "N/A",
        best: "",
        average: "",
        rounds: 0
      }
    ]
  };

  profile.courses.push(myCourse);
  profile.notifications.other.push({
    type: "addCourse",
    data: course.name
  });
  return profile;
};

module.exports = addCourseToProfile;
