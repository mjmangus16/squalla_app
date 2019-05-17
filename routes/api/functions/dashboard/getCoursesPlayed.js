const getCoursesPlayed = courses => {
  let count = 0;

  courses.forEach(course => {
    if (course.tees[0].average !== "") {
      count++;
    } else if (course.tees[1].average !== "") {
      count++;
    } else if (course.tees[2].average !== "") {
      count++;
    } else if (course.tees[3].average !== "") {
      count++;
    }
  });

  return count;
};

module.exports = getCoursesPlayed;
