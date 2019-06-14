const getPerformancePointsPerCourse = (courses, rounds, username) => {
  let coursesPerformance = courses.map(course => ({
    course: course.name,
    rounds: rounds.filter(round => round.course === course.name).length,
    rating: rounds
      .filter(round => round.course === course.name)
      .map(round => {
        let container = round.scores.filter(
          score => score.username === username
        );

        return container[0].performance;
      })
      .reduce((acc, curr) => acc + curr)
  }));

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
