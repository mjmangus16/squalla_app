const getPerformancePointsPerCourse = profile => {
  const courses = profile.courses;
  const rounds = profile.rounds;

  let coursesPerformance = courses.map(course => ({
    course: course.name,
    rounds: 0,
    rating: 0
  }));

  console.log("After Map: ", coursesPerformance);

  for (let i = 0; i < coursesPerformance.length; i++) {
    for (let y = 0; y < rounds.length; y++) {
      if (coursesPerformance[i].course === rounds[y].course) {
        coursesPerformance[i].rounds++;

        for (let j = 0; j < rounds[y].scores.length; j++) {
          if (rounds[y].scores[j].username === profile.username) {
            coursesPerformance[i].rating =
              coursesPerformance[i].rating + rounds[y].scores[j].performance;
          }
        }
      }
    }
  }

  console.log("Before Sort: ", coursesPerformance);

  coursesPerformance.sort((a, b) => {
    if (a.rounds < b.rounds) {
      return 1;
    }
    if (a.rounds > b.rounds) {
      return -1;
    }
    return 0;
  });
  if (coursesPerformance.length > 10) {
    coursesPerformance.splice(0, 10);
    console.log("After Splice: ", coursesPerformance);
  }

  console.log("Before Return: ", coursesPerformance);

  return coursesPerformance;
};

module.exports = getPerformancePointsPerCourse;
