const getRoundsData = profile => {
  let myScore = i => {
    for (let j = 0; j < profile.rounds[i].scores.length; j++) {
      if (profile.rounds[i].scores[j].player === profile.username) {
        return profile.rounds[i].scores[j].score;
      }
    }
  };
  let roundsData = [];
  for (let i = 0; i < profile.rounds.length; i++) {
    roundsData.push({
      date: profile.rounds[i].date,
      course: profile.rounds[i].course.name,
      tees: profile.rounds[i].course.tees,
      myScore: myScore(i),
      players: profile.rounds[i].scores.length,
      roundScores: profile.rounds[i].scores,
      owner: profile.rounds[i].owner,
      league: profile.rounds[i].league
    });
  }
  return roundsData;
};

module.exports = getRoundsData;
