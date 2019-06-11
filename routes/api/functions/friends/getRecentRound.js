const getRecentRound = (rounds, username) => {
  let data;
  if (rounds[0]) {
    const round = rounds[0];

    data = {
      date: round.date,
      course: round.course
    };

    data.score = round.scores.filter(score => {
      if (score.username === username) {
        return score.score;
      }
    })[0].score;
  } else {
    data = {
      date: "N/A",
      course: "N/A",
      score: "N/A"
    };
  }
  return data;
};

module.exports = getRecentRound;
