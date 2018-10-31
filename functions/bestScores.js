const bestScores = (course, username) => {
  let currentBest = course.bestScores;
  let history = course.history;

  for (let i = 0; i < history.length; i++) {
    for (let j = 0; j < history[i].scores.length; j++) {
      if (history[i].scores[j].player === username) {
        if (history[i].course.tees === "gold") {
          if (
            currentBest.gold === "N/A" ||
            currentBest.gold > history[i].scores[j].score
          ) {
            currentBest.gold = history[i].scores[j].score;
          }
        } else if (history[i].course.tees === "blue") {
          if (
            currentBest.blue === "N/A" ||
            currentBest.blue > history[i].scores[j].score
          ) {
            currentBest.blue = history[i].scores[j].score;
          }
        } else if (history[i].course.tees === "white") {
          if (
            currentBest.white === "N/A" ||
            currentBest.white > history[i].scores[j].score
          ) {
            currentBest.white = history[i].scores[j].score;
          }
        } else if (history[i].course.tees === "red") {
          if (
            currentBest.red === "N/A" ||
            currentBest.red > history[i].scores[j].score
          ) {
            currentBest.red = history[i].scores[j].score;
          }
        }
      }
    }
  }
  return currentBest;
};

module.exports = bestScores;
