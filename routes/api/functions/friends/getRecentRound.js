const getRecentRound = (rounds, username) => {
  let data;
  if (rounds[0]) {
    const round = rounds[0];

    data = {
      date: round.date,
      course: round.course
    };

    for (let i = 0; i < round.scores.length; i++) {
      if (round.scores[i].username === username) {
        data.score = round.scores[i].score;
      }
    }
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
