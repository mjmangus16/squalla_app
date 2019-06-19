const getPerformancePointsPerRound = (rounds, perfPoints, username) => {
  let currentPoints = perfPoints;
  let points = [];

  if (rounds.length > 9) {
    rounds = rounds.slice(0, 9);
  }

  rounds.forEach(round => {
    round.scores.forEach(score => {
      if (score.username === username) {
        perfPoints = perfPoints - score.performance;
        points.unshift(perfPoints);
      }
    });
  });

  points.push(currentPoints);
  return points;
};

module.exports = getPerformancePointsPerRound;
