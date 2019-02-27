const getRoundsPerCourse = profile => {
  const courses = profile.courses;
  const rounds = profile.rounds;

  let myCourses = courses.map(course => ({
    course: course.name,
    rounds: 0
  }));

  for (let i = 0; i < myCourses.length; i++) {
    for (let y = 0; y < rounds.length; y++) {
      if (myCourses[i].course === rounds[y].course) {
        myCourses[i].rounds++;
      }
    }
  }
  return myCourses;
};

module.exports = getRoundsPerCourse;
