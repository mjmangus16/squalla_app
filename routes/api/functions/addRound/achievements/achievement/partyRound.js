const partyRound = (available, round) => {
  data = {
    pass: false,
    info: {}
  };

  if (round.scores.length >= 8) {
    data.info = available.filter(avail => avail.code === 18)[0];
    data.pass = true;
    data.info.count++;
  }

  return data;
};

module.exports = partyRound;
