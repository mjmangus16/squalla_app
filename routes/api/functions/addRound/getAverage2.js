const getAverage = (history, score) => {
  let data;
  let sum = 0;
  if (history.length > 0) {
    for (let i = 0; i < history.length; i++) {
      sum = sum + parseInt(history[i].score);
    }
    sum = sum + parseInt(score);
    let length = history.length + 1;
    data = Math.round(sum / length);
  } else {
    data = "";
  }

  return data;
};

module.exports = getAverage;
