const playMultipleCourses = (available, courses, rounds) => {
  data = {
    pass: false,
    info: {}
  };

  data.info = available.filter(avail => avail.code === 4)[0];

  let coursesContainer = rounds.map(round => round.course);

  data.info.data = [];

  courses.forEach(course => {
    if (coursesContainer.includes(course.name))
      data.info.data.push(course.name);
  });

  if (data.info.data.length === 5 && data.info.count === 0) {
    data.pass = true;
    data.info.count++;
  } else if (data.info.data.length === 10 && data.info.count === 1) {
    data.pass = true;
    data.info.count++;
  } else if (data.info.data.length === 25 && data.info.count === 2) {
    data.pass = true;
    data.info.count++;
  } else if (data.info.data.length === 50 && data.info.count === 3) {
    data.pass = true;
    data.info.count++;
  }

  return data;
};

module.exports = playMultipleCourses;
