const getRoundsPlayed = rounds => {
  let count = 0;

  rounds.forEach(round => {
    if (round.holes >= 18) {
      count++;
    } else {
      count = count + 0.5;
    }
  });

  return count;
};

module.exports = getRoundsPlayed;
