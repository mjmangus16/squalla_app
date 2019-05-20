const earnPositiveRating10 = (available, performancePoints) => {
  data = {
    pass: false,
    info: {}
  };
  if (performancePoints >= 10) {
    data.info = available.filter(avail => avail.code === 15)[0];
    data.pass = true;
    data.info.count++;
  }

  return data;
};

module.exports = earnPositiveRating10;
