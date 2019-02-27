const getRecentRounds = (rounds, username) => {
  rounds = rounds.slice(0, 3);
  let myRounds = [];

  for (let i = 0; i < rounds.length; i++) {
    let data = {
      date: rounds[i].date,
      course: rounds[i].course
    };

    for (let y = 0; y < rounds[i].scores.length; y++) {
      if (rounds[i].scores[y].username === username) {
        data.score = rounds[i].scores[y].score;
      }
    }

    myRounds.push(data);
  }
  return myRounds;
};

module.exports = getRecentRounds;
