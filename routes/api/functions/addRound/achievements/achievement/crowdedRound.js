const crowdedRound = (available, round) => {
  data = {
    pass: false,
    info: {}
  };

  if (round.scores.length >= 5 && round.scores.length < 8) {
    available.forEach(avail => {
      if (avail.code === 17) data.info = avail;
    });
    data.pass = true;
    data.info.count++;
  }

  return data;
};

module.exports = crowdedRound;
