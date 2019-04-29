const stopTheBleeding = (available, round, rounds, username) => {
  data = {
    pass: false,
    info: {}
  };

  let count = 0;

  let roundsArray = [rounds[1], rounds[2], rounds[3]];

  for (let i = 0; i < available.length; i++) {
    if (available[i].code === 22) {
      data.info = available[i];
    }
  }

  for (let i = 0; i < roundsArray.length; i++) {
    for (let y = 0; y < roundsArray[i].scores.length; y++) {
      if (roundsArray[i].scores[y].username === username) {
        if (roundsArray[i].scores[y].performance < 0) {
          count++;
        }
      }
    }
  }

  let earned = false;

  for (let i = 0; i < round.scores.length; i++) {
    if (round.scores[i].username === username) {
      if (round.scores[i].performance >= 0) {
        earned = true;
      }
    }
  }

  if (count === 3 && earned === true) {
    data.pass = true;
    data.info.count++;
  }

  return data;
};

module.exports = stopTheBleeding;
