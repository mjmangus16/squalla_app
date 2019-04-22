const getAverage = history => {
  let data;
  let sum = 0;
  for (let i = 0; i < history.length; i++) {
    sum = sum + parseInt(history[i].score);
  }
  data = sum / history.length;

  return data;
};

module.exports = getAverage;
