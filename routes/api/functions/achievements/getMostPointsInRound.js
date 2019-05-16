const getMostPointsInRound = (rounds, username) => {
  let myScores = rounds.map(round => {
    let myScore = round.scores.filter(score => score.username === username)[0];
    return myScore;
  });

  let points = myScores.map(score => score.achievementPoints);

  return Math.max(...points);
};

module.exports = getMostPointsInRound;
