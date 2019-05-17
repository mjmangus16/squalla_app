const getRoundsPerCourse = (courses, rounds) => {
  let myCourses = courses.map(course => ({
    course: course.name,
    holes: course.holes,
    rounds: 0
  }));

  myCourses.forEach(course => {
    rounds.forEach(round => {
      if (course.course === round.course) {
        course.holes < 18
          ? (course.rounds = course.rounds + 0.5)
          : course.rounds++;
      }
    });
  });

  return myCourses;
};

module.exports = getRoundsPerCourse;
