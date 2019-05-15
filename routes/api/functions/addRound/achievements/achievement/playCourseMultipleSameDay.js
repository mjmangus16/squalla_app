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
    if (myRounds[i].course === round.course) {
      if (myRounds[i].date === date) {
        if (myRounds[i].holes >= 18) {
          count++;
        } else {
          count = count + 0.5;
        }
      }
    }
  }

  if (count >= 2) {
    data.pass = true;
    data.info.count++;

    data.info.data.push({ course: round.course, date: date, count: count });
  }

  return data;
};

module.exports = playCourseMultipleSameDay;
