const playCourseMultipleSameDay = (available, myRounds, round) => {
  data = {
    pass: false,
    info: {}
  };

  data.info = available.filter(avail => avail.code === 5)[0];

  let date = round.date;
  let count = 0;

  let updatedRounds = myRounds.filter(
    myRound => myRound.course === round.course
  );

  updatedRounds = updatedRounds.filter(myRound => myRound.date === date);

  updatedRounds.forEach(myRound => {
    if (myRound.holes >= 18) {
      count++;
    } else if (myRound.holes < 18) {
      count = count + 0.5;
    }
  });

  if (count >= 2) {
    data.pass = true;
    data.info.count++;

    data.info.data.push({ course: round.course, date: date, count: count });
  }

  return data;
};

module.exports = playCourseMultipleSameDay;
