const getCoursesPlayed = courses => {
  let count = 0;

  for (let i = 0; i < courses.length; i++) {
    for (let y = 0; y < courses[i].tees.length; y++) {
      if (courses[i].tees[y].average !== "") {
        count++;
        break;
      }
    }
  }
  return count;
};

module.exports = getCoursesPlayed;
