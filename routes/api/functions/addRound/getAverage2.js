const getAverage = (history, score) => {
  let data;
  let sum = 0;
  if (history.length > 0) {
    sum = history.reduce((acc, curr) => acc + parseInt(curr.score), 0);
    sum = sum + parseInt(score);
    let length = history.length + 1;
    data = Math.round(sum / length);
  } else {
    data = "";
  }

  return data;
};

module.exports = getAverage;
