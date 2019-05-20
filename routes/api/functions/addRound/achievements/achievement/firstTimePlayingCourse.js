const firstTimePlayingCourse = (available, round) => {
  data = {
    pass: true,
    info: {}
  };

  data.info = available.filter(avail => avail.code === 2)[0];

  data.info.data.forEach(d => {
    if (d === round.course) data.pass = false;
  });

  if (data.pass === true) {
    data.info.count++;
    data.info.data.push(round.course);
  }
  return data;
};

module.exports = firstTimePlayingCourse;
