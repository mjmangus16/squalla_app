const getAchievementPointsPerRound = (rounds, achievePoints, username) => {
  let points = [];
  let currentPoints = achievePoints;

  if (rounds.length > 9) {
    rounds = rounds.slice(0, 10);
  }

  rounds.forEach(round => {
    round.scores.forEach(score => {
      if (score.username === username) {
        achievePoints = achievePoints - score.achievementPoints;
        points.unshift(achievePoints);
      }
    });
  });

  points.splice(0, 1);
  points.push(currentPoints);
  return points;
};

module.exports = getAchievementPointsPerRound;
