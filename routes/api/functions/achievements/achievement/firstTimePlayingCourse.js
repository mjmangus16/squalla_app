const firstTimePlayingCourse = (available, round) => {
  data = {
    pass: true,
    info: {}
  };

  for (let i = 0; i < available.length; i++) {
    if (available[i].code === 2) {
      data.info = available[i];
    }
  }

  for (let j = 0; j < data.info.data.length; j++) {
    if (data.info.data[j] === round.course) {
      data.pass = false;
    }
  }

  if (data.pass === true) {
    data.info.count++;
    data.info.data.push(round.course);
  }
  return data;
};

module.exports = firstTimePlayingCourse;
