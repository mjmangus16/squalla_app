const getPerformanceOverall = (rounds, username) => {
  let overall = {
    plus2: 0,
    plus1: 0,
    even: 0,
    minus: 0
  };

  for (let i = 0; i < rounds.length; i++) {
    for (let y = 0; y < rounds[i].scores.length; y++) {
      if (rounds[i].scores[y].username === username) {
        if (rounds[i].scores[y].performance === 2) {
          overall.plus2++;
        } else if (rounds[i].scores[y].performance === 1) {
          overall.plus1++;
        } else if (rounds[i].scores[y].performance === 0.5) {
          overall.plus1 = overall.plus1 + 0.5;
        } else if (rounds[i].scores[y].performance === 0) {
          overall.even++;
        } else if (rounds[i].scores[y].performance === -1) {
          overall.minus++;
        }
      }
    }
  }

  return overall;
};

module.exports = getPerformanceOverall;
