const playWithSomeoneFirstTime = (available, round, username) => {
  data = {
    pass: false,
    info: {}
  };

  let playersInRound = [];

  for (let i = 0; i < available.length; i++) {
    if (available[i].code === 12) {
      data.info = available[i];
    }
  }

  for (let i = 0; i < round.scores.length; i++) {
    if (round.scores[i].username !== username) {
      playersInRound.push(round.scores[i].username);
    }
  }

  for (let i = 0; i < playersInRound.length; i++) {
    if (!data.info.data.includes(playersInRound[i])) {
      data.pass = true;
      data.info.count++;
      data.info.data.push(playersInRound[i]);
    }
  }
  return data;
};

module.exports = playWithSomeoneFirstTime;
