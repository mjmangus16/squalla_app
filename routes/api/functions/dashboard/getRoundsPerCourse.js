const getRoundsPerCourse = profile => {
  const courses = profile.courses;
  const rounds = profile.rounds;

  let myCourses = courses.map(course => ({
    course: course.name,
    holes: course.holes,
    rounds: 0
  }));

  for (let i = 0; i < myCourses.length; i++) {
    for (let y = 0; y < rounds.length; y++) {
      if (myCourses[i].course === rounds[y].course) {
        if (myCourses[i].holes >= 18) {
          myCourses[i].rounds++;
        } else {
          myCourses[i].rounds = myCourses[i].rounds + 0.5;
        }
      }
    }
  }
  return myCourses;
};

module.exports = getRoundsPerCourse;
