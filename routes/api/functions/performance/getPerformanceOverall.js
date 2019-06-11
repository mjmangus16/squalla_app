const getPerformanceOverall = (rounds, username) => {
  let overall = {
    plus2: 0,
    plus1: 0,
    even: 0,
    minus: 0
  };

  rounds.forEach(round => {
    console.log(round);
    round.scores.forEach(score => {
      if (score.username === username) {
        if (score.performance === 2) {
          overall.plus2++;
        } else if (score.performance === 1) {
          overall.plus1++;
        } else if (score.performance === 0.5) {
          overall.plus1 = overall.plus1 + 0.5;
        } else if (score.performance === 0) {
          if (round.holes >= 18) {
            overall.even++;
          } else {
            overall.even = overall.even + 0.5;
          }
        } else if (score.performance === -0.5) {
          overall.minus = overall.minus + 0.5;
        } else if (score.performance === -1) {
          overall.minus++;
        }
      }
    });
  });

  return overall;
};

module.exports = getPerformanceOverall;
