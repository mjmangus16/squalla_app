const playMultipleCourses = (available, courses, rounds) => {
  data = {
    pass: false,
    info: {}
  };

  for (let i = 0; i < available.length; i++) {
    if (available[i].code === 4) {
      data.info = available[i];
    }
  }

  let coursesContainer = [];
  for (let i = 0; i < rounds.length; i++) {
    coursesContainer.push(rounds[i].course);
  }

  data.info.data = [];

  for (let j = 0; j < courses.length; j++) {
    if (coursesContainer.includes(courses[j].name)) {
      data.info.data.push(courses[j].name);
    }
  }

  if (data.info.data.length === 5) {
    data.pass = true;
    data.info.count++;
  } else if (data.info.data.length === 10) {
    data.pass = true;
    data.info.count++;
  } else if (data.info.data.length === 25) {
    data.pass = true;
    data.info.count++;
  } else if (data.info.data.length === 50) {
    data.pass = true;
    data.info.count++;
  }

  return data;
};

module.exports = playMultipleCourses;
