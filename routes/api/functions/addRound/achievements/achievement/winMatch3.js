const winMatch3 = (available, round, username) => {
  data = {
    pass: false,
    info: {}
  };

  let sortable = [];

  for (let i = 0; i < available.length; i++) {
    if (available[i].code === 19) {
      data.info = available[i];
    }
  }

  if (round.scores.length >= 3 && round.scores.length < 6) {
    for (let i = 0; i < round.scores.length; i++) {
      sortable.push([round.scores[i].username, round.scores[i].score]);
    }
    sortable.sort((a, b) => {
      return a[1] - b[1];
    });

    if (
      round.holes >= 18 &&
      sortable[0][0] === username &&
      sortable[0][1] !== sortable[1][1]
    ) {
      data.pass = true;
      data.info.count++;
    }
  }

  return data;
};

module.exports = winMatch3;
