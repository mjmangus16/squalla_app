const getPerformancePointsPerRound = profile => {
  let rounds = profile.rounds;
  let currentPoints = profile.performancePoints;
  let points = [];

  if (rounds.length > 9) {
    rounds = rounds.slice(0, 10);
  }

  for (let i = 0; i < rounds.length; i++) {
    for (let y = 0; y < rounds[i].scores.length; y++) {
      if (rounds[i].scores[y].username === profile.username) {
        points.unshift(currentPoints - rounds[i].scores[y].performance);
        currentPoints = currentPoints - rounds[i].scores[y].performance;
      }
    }
  }

  points.splice(0, 1);
  points.push(profile.performancePoints);
  return points;
};

module.exports = getPerformancePointsPerRound;
