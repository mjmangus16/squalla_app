const crowdedRound = (available, round) => {
  data = {
    pass: false,
    info: {}
  };

  if (round.scores.length >= 5 && round.scores.length < 8) {
    data.info = available.filter(avail => avail.code === 17)[0];
    data.pass = true;
    data.info.count++;
  }

  return data;
};

module.exports = crowdedRound;
