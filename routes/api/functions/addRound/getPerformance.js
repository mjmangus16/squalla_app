const getPerformance = (average, best, score, holes) => {
  let data;

  if (average === "") {
    data = 0;
  } else if (score == average) {
    data = 0;
  } else if (score > average) {
    if (holes >= 18) {
      data = -1;
    } else {
      data = -0.5;
    }
  } else if (score < average) {
    if (holes >= 18) {
      data = 1;
    } else {
      data = 0.5;
    }
  }

  if (score < best) {
    if (holes >= 18) {
      data = 2;
    } else {
      data = 1;
    }
  }

  return data;
};

module.exports = getPerformance;
