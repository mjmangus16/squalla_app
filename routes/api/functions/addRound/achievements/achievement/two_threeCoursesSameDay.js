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
      data.info = available.filter(avail => avail.code === 7)[0];
    } else if (sameDayRounds.length === 3) {
      data.info = available.filter(avail => avail.code === 6)[0];
    }

    data.pass = true;
    data.info.data.push({ date: round.date, courses: sameDayRounds });
    data.info.count++;
  }
  return data;
};

module.exports = two_threeCoursesSameDay;
