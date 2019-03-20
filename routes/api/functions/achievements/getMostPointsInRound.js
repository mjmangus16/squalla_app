const getMostPointsInRound = (rounds, username) => {
  let most = 0;

  for (let i = 0; i < rounds.length; i++) {
    for (let y = 0; y < rounds[i].scores.length; y++) {
      if (rounds[i].scores[y].username === username) {
        if (rounds[i].scores[y].achievementPoints > most) {
          most = rounds[i].scores[y].achievementPoints;
        }
      }
    }
  }
  return most;
};

module.exports = getMostPointsInRound;
