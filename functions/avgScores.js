const avgScores = (course, username) => {
  let goldCount = 0;
  let goldSum = 0;

  let blueCount = 0;
  let blueSum = 0;

  let whiteCount = 0;
  let whiteSum = 0;

  let redCount = 0;
  let redSum = 0;

  for (let i = 0; i < course.history.length; i++) {
    if (course.history[i].course.tees === "gold") {
      for (let j = 0; j < course.history[i].scores.length; j++) {
        if (course.history[i].scores[j].player === username) {
          goldCount++;
          goldSum = goldSum + parseInt(course.history[i].scores[j].score);
        }
      }
    } else if (course.history[i].course.tees === "blue") {
      for (let j = 0; j < course.history[i].scores.length; j++) {
        if (course.history[i].scores[j].player === username) {
          blueCount++;
          blueSum = blueSum + parseInt(course.history[i].scores[j].score);
        }
      }
    } else if (course.history[i].course.tees === "white") {
      for (let j = 0; j < course.history[i].scores.length; j++) {
        if (course.history[i].scores[j].player === username) {
          whiteCount++;
          whiteSum = whiteSum + parseInt(course.history[i].scores[j].score);
        }
      }
    } else if (course.history[i].course.tees === "red") {
      for (let j = 0; j < course.history[i].scores.length; j++) {
        if (course.history[i].scores[j].player === username) {
          redCount++;
          redSum = redSum + parseInt(course.history[i].scores[j].score);
        }
      }
    }
  }

  let courseAvg = {};

  if (goldCount > 0) {
    courseAvg.gold = Math.round(goldSum / goldCount);
  } else {
    courseAvg.gold = "N/A";
  }

  if (blueCount > 0) {
    courseAvg.blue = Math.round(blueSum / blueCount);
  } else {
    courseAvg.blue = "N/A";
  }

  if (whiteCount > 0) {
    courseAvg.white = Math.round(whiteSum / whiteCount);
  } else {
    courseAvg.white = "N/A";
  }

  if (redCount > 0) {
    courseAvg.red = Math.round(redSum / redCount);
  } else {
    courseAvg.red = "N/A";
  }

  return courseAvg;
};

module.exports = avgScores;
