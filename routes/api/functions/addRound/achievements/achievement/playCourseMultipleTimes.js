const playCourseMultipleTimes = (available, courseData) => {
  data = {
    pass: false,
    info: {}
  };

  let roundsPlayed;

  if (courseData.courseInfo.holes < 18) {
    roundsPlayed = courseData.courseInfo.history.length / 2;
  } else {
    roundsPlayed = courseData.courseInfo.history.length;
  }

  for (let i = 0; i < available.length; i++) {
    if (available[i].code === 3) {
      data.info = available[i];
    }
  }

  if (roundsPlayed === 10) {
    data.pass = true;
    data.info.count++;
    data.info.data.push({ course: courseData.courseInfo.name, count: 10 });
  } else if (roundsPlayed === 25) {
    data.pass = true;
    data.info.count++;
    for (let i = 0; i < data.info.data.length; i++) {
      if (data.info.data[i].course === courseData.courseInfo.name) {
        data.info.data.push({ course: courseData.courseInfo.name, count: 25 });
      }
    }
  } else if (roundsPlayed === 50) {
    data.pass = true;
    data.info.count++;
    for (let i = 0; i < data.info.data.length; i++) {
      if (data.info.data[i].course === courseData.courseInfo.name) {
        data.info.data.push({ course: courseData.courseInfo.name, count: 50 });
      }
    }
  } else if (roundsPlayed === 100) {
    data.pass = true;
    data.info.count++;
    for (let i = 0; i < data.info.data.length; i++) {
      if (data.info.data[i].course === courseData.courseInfo.name) {
        data.info.data.push({ course: courseData.courseInfo.name, count: 100 });
      }
    }
  }

  return data;
};

module.exports = playCourseMultipleTimes;
