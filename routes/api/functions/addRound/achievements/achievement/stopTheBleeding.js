const stopTheBleeding = (available, round, rounds, username) => {
  data = {
    pass: false,
    info: {}
  };

  if (rounds.length >= 4) {
    let count = 0;
    let earned = false;

    data.info = available.filter(avail => avail.code === 22)[0];

    round.scores.forEach(score => {
      if (score.username === username && score.performance >= 0) {
        earned = true;
      }
    });

    if (earned) {
      let roundsArray = [rounds[1], rounds[2], rounds[3]];

      roundsArray.forEach(round => {
        round.scores.forEach(score => {
          if (score.username === username && score.performance < 0) {
            count++;
          }
        });
      });
    }

    if (count === 3 && earned === true) {
      data.pass = true;
      data.info.count++;
    }
  }

  return data;
};

module.exports = stopTheBleeding;
