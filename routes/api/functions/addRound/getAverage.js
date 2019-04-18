const getAverage = history => {
  let data;
  let sum = 0;
  for (let i = 0; i < history.length; i++) {
    sum = sum + parseInt(history[i].score);
  }
  data = sum / history.length;
  console.log(sum, history.length);
  console.log(data);
  return data;
};

module.exports = getAverage;
