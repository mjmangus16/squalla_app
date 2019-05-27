const winMatch10 = (available, round, username) => {
  data = {
    pass: false,
    info: {}
  };

  let sortable = [];

  data.info = available.filter(avail => avail.code === 21)[0];

  if (round.scores.length > 10) {
    let sortable = round.scores.map(score => {
      return { username: score.username, score: score.score };
    });

    sortable.sort((a, b) => {
      return a.score - b.score;
    });

    if (
      round.holes >= 18 &&
      sortable[0].username === username &&
      sortable[0].score !== sortable[1].score
    ) {
      data.pass = true;
      data.info.count++;
    }
  }

  return data;
};

module.exports = winMatch10;
