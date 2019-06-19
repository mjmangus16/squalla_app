const getScore = (round, username) => {
  let data;

  for (let i = 0; i < round.scores.length; i++) {
    if (round.scores[i].username === username) {
      data = round.scores[i].score;
    }
  }
  return data;
};

const getExperience = (round, username) => {
  let data;

  for (let i = 0; i < round.scores.length; i++) {
    if (round.scores[i].username === username) {
      data = round.scores[i].experience;
    }
  }
  return data;
};

const getPerformance = (round, username) => {
  let data;

  for (let i = 0; i < round.scores.length; i++) {
    if (round.scores[i].username === username) {
      data = round.scores[i].performance;
    }
  }

  if (data > 0) {
    data = "+" + data;
  }

  return data;
};

const getRoundsPlayed = rounds => {
  let data = 0;

  for (let i = 0; i < rounds.length; i++) {
    if (rounds[i].holes < 18) {
      data = data + 0.5;
    } else {
      data++;
    }
  }

  return data;
};

export default { getRoundsPlayed, getScore, getExperience, getPerformance };
