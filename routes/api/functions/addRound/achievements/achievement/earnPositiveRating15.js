const earnPositiveRating15 = (available, performancePoints) => {
  data = {
    pass: false,
    info: {}
  };
  if (performancePoints >= 15) {
    for (let i = 0; i < available.length; i++) {
      if (available[i].code === 16) {
        data.pass = true;
        data.info = available[i];
        data.info.count++;
      }
    }
  }

  return data;
};

module.exports = earnPositiveRating15;
