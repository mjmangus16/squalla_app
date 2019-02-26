const playCourseMultipleSameDay = (available, myRounds, round) => {
  data = {
    pass: false,
    info: {}
  };

  for (let i = 0; i < available.length; i++) {
    if (available[i].code === 5) {
      data.info = available[i];
    }
  }

  let date = round.date;
  let count = 0;

  for (let i = 0; i < myRounds.length; i++) {
    if (myRounds[i].course.name === round.course) {
      if (myRounds[i].date === date) {
        count++;
      }
    }
  }

  if (count > 1) {
    data.pass = true;
    data.info.count++;
    data.info.points = 0;
    for (let j = 1; j < count; j++) {
      data.info.points = data.info.points + 2;
    }

    data.info.data.push({ course: round.course, date: date, count: count });
  }

  return data;
};

module.exports = playCourseMultipleSameDay;