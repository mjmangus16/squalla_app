const getAverage = history => {
  let data;
  let sum = 0;
  if (history.length > 0) {
    sum = history.reduce((acc, curr) => acc + parseInt(curr.score), 0);
    data = Math.round(sum / history.length);
  } else {
    data = "";
  }

  return data;
};

module.exports = getAverage;
