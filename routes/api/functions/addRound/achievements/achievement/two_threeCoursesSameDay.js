const two_threeCoursesSameDay = (available, myRounds, round) => {
  data = {
    pass: false,
    info: {}
  };

  let sameDayRounds = [];

  for (let i = 0; i < myRounds.length; i++) {
    if (myRounds[i].date === round.date && myRounds[i].holes >= 18) {
      sameDayRounds.push(myRounds[i].course);
    }
  }

  sameDayRounds = [...new Set(sameDayRounds)];

  if (sameDayRounds.length >= 2 && sameDayRounds.length <= 3) {
    if (sameDayRounds.length === 2) {
      for (let i = 0; i < available.length; i++) {
        if (available[i].code === 7) {
          data.info = available[i];
        }
      }
    } else if (sameDayRounds.length === 3) {
      for (let i = 0; i < available.length; i++) {
        if (available[i].code === 6) {
          data.info = available[i];
        }
      }
    }

    data.pass = true;
    data.info.data.push({ date: round.date, courses: sameDayRounds });
    data.info.count++;
  }
  return data;
};

module.exports = two_threeCoursesSameDay;
