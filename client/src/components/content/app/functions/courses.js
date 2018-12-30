const getCoursesData = profile => {
  for (let i = 0; i < profile.courses.length; i++) {
    for (let j = 0; j < profile.rounds.length; j++) {
      if (profile.courses[i].name === profile.rounds[j].course.name) {
        profile.courses[i].history.unshift(profile.rounds[j]);
      }
    }
  }
  return profile.courses;
};

module.exports = getCoursesData;
