const earnPositiveRating15 = (available, performancePoints) => {
  data = {
    pass: false,
    info: {}
  };
  if (performancePoints >= 15) {
    data.info = available.filter(avail => avail.code === 16)[0];
    data.pass = true;
    data.info.count++;
  }

  return data;
};

module.exports = earnPositiveRating15;
