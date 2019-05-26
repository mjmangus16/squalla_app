const playWithSomeoneFirstTime = (available, round, username) => {
  data = {
    pass: false,
    info: {}
  };

  data.info = available.filter(avail => avail.code === 12)[0];

  let playersInRound = [];

  round.scores.forEach(score => {
    if (score.username !== username) {
      playersInRound.push(score.username);
    }
  });

  playersInRound.forEach(player => {
    if (!data.info.data.includes(player)) {
      data.pass = true;
      data.info.count++;
      data.info.data.push(player);
    }
  });

  return data;
};

module.exports = playWithSomeoneFirstTime;
