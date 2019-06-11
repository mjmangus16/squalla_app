const getPerformancePointsPerCourse = (courses, rounds, username) => {
  let coursesPerformance = courses.map(course => ({
    course: course.name,
    rounds: rounds.filter(round => round.course === course.name).length,
    rating: rounds
      .filter(round => round.course === course.name)
      .map(round => round.scores)[1]
    // .filter(score => score.username === username)
    // .reduce((acc, curr) => acc + curr.performance, 0)
  }));

  console.log(coursesPerformance[1].rating);

  // for (let i = 0; i < coursesPerformance.length; i++) {
  //   for (let y = 0; y < rounds.length; y++) {
  //     if (coursesPerformance[i].course === rounds[y].course) {
  //       coursesPerformance[i].rounds++;

  //       for (let j = 0; j < rounds[y].scores.length; j++) {
  //         if (rounds[y].scores[j].username === username) {
  //           coursesPerformance[i].rating =
  //             coursesPerformance[i].rating + rounds[y].scores[j].performance;
  //         }
  //       }
  //     }
  //   }
  // }

  coursesPerformance.sort((a, b) => {
    if (a.rounds < b.rounds) {
      return 1;
    }
    if (a.rounds > b.rounds) {
      return -1;
    }
    return 0;
  });

  coursesPerformance = coursesPerformance.splice(0, 10);

  return coursesPerformance;
};

module.exports = getPerformancePointsPerCourse;
