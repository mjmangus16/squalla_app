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

  data.info = available.filter(avail => avail.code === 3)[0];

  if (roundsPlayed === 10) {
    data.pass = true;
    data.info.count++;
    data.info.data.push({ course: courseData.courseInfo.name, count: 10 });
  } else if (roundsPlayed === 25) {
    data.pass = true;
    data.info.count++;

    data.info.data.forEach(item => {
      if (item.course === courseData.courseInfo.name)
        data.info.data.push({ course: courseData.courseInfo.name, count: 25 });
    });
  } else if (roundsPlayed === 50) {
    data.pass = true;
    data.info.count++;

    data.info.data.forEach(item => {
      if (item.course === courseData.courseInfo.name)
        data.info.data.push({ course: courseData.courseInfo.name, count: 50 });
    });
  } else if (roundsPlayed === 100) {
    data.pass = true;
    data.info.count++;

    data.info.data.forEach(item => {
      if (item.course === courseData.courseInfo.name)
        data.info.data.push({ course: courseData.courseInfo.name, count: 100 });
    });
  }

  return data;
};

module.exports = playCourseMultipleTimes;
