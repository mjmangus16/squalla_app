const getAverage = history => {
  let data;
  let sum = 0;
  if (history.length > 0) {
    for (let i = 0; i < history.length; i++) {
      sum = sum + parseInt(history[i].score);
    }
    data = Math.round(sum / history.length);
  } else {
    data = "";
  }

  return data;
};

module.exports = getAverage;
