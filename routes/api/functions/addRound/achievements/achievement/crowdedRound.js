const crowdedRound = (available, round) => {
  data = {
    pass: false,
    info: {}
  };

  for (let i = 0; i < available.length; i++) {
    if (available[i].code === 17) {
      data.info = available[i];
    }
  }

  if (round.scores.length >= 5 && round.scores.length < 8) {
    data.pass = true;
    data.info.count++;
  }

  return data;
};

module.exports = crowdedRound;
