const getPerformance = (average, score) => {
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

  return data;
};

module.exports = getPerformance;
