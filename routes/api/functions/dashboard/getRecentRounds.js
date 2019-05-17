const getRecentRounds = (rounds, username) => {
  rounds = rounds.slice(0, 3);

  let myRounds = [];

  rounds.forEach(round => {
    myRounds.push({
      date: round.date,
      course: round.course,
      score: round.scores.map(score => {
        if (score.username === username) {
          return score.score;
        }
      })[0]
    });
  });

  return myRounds;
};

module.exports = getRecentRounds;
