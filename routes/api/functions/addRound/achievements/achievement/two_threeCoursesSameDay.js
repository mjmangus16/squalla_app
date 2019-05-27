const two_threeCoursesSameDay = (available, myRounds, round) => {
  data = {
    pass: false,
    info: {}
  };

  let sameDayRounds = myRounds.filter(
    myRound => myRound.date === round.date && myRound.holes >= 18
  );

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
