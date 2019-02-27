const playCourseMultipleTimes = (available, courseData) => {
  data = {
    pass: false,
    info: {}
  };

  for (let i = 0; i < available.length; i++) {
    if (available[i].code === 3) {
      data.info = available[i];
    }
  }

  if (courseData.courseInfo.history.length === 10) {
    data.pass = true;
    data.info.count++;
    data.info.data.push({ course: courseData.courseInfo.name, count: 10 });
  } else if (courseData.courseInfo.history.length === 25) {
    data.pass = true;
    data.info.count++;
    for (let i = 0; i < data.info.data.length; i++) {
      if (data.info.data[i].course === courseData.courseInfo.name) {
        data.info.data.push({ course: courseData.courseInfo.name, count: 25 });
      }
    }
  } else if (courseData.courseInfo.history.length === 50) {
    data.pass = true;
    data.info.count++;
    for (let i = 0; i < data.info.data.length; i++) {
      if (data.info.data[i].course === courseData.courseInfo.name) {
        data.info.data.push({ course: courseData.courseInfo.name, count: 50 });
      }
    }
  } else if (courseData.courseInfo.history.length === 100) {
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
