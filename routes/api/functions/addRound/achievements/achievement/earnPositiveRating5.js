const earnPositiveRating5 = (available, performancePoints) => {
  data = {
    pass: false,
    info: {}
  };

  if (performancePoints >= 5) {
    data.info = available.filter(avail => avail.code === 14)[0];
    data.pass = true;
    console.log(data);
    data.info.count++;
  }

  return data;
};

module.exports = earnPositiveRating5;
