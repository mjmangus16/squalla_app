const getPerformance = (average, best, score) => {
  let data;

  if (average === "") {
    data = 0;
  } else if (score == average) {
    data = 0;
  } else if (score > average) {
    data = -1;
  } else if (score < average) {
    data = 1;
  }

  if (score < best) {
    data = 2;
  }

  return data;
};

module.exports = getPerformance;
