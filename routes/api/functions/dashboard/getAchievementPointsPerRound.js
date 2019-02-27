const getAchievementPointsPerRound = profile => {
  let rounds = profile.rounds;
  let currentPoints = profile.achievementPoints;
  let points = [];

  if (rounds.length > 9) {
    rounds = rounds.slice(0, 10);
  }

  for (let i = 0; i < rounds.length; i++) {
    for (let y = 0; y < rounds[i].scores.length; y++) {
      if (rounds[i].scores[y].username === profile.username) {
        points.unshift(currentPoints - rounds[i].scores[y].achievementPoints);
        currentPoints = currentPoints - rounds[i].scores[y].achievementPoints;
      }
    }
  }
  points.splice(0, 1);
  points.push(profile.achievementPoints);
  return points;
};

module.exports = getAchievementPointsPerRound;
