const beatYourBest = (available, myStats) => {
  data = {
    pass: false,
    info: {}
  };

  if (myStats.best !== "N/A") {
    if (myStats.best > myStats.score) {
      data.info = available.filter(avail => avail.code === 10)[0];

      data.pass = true;
      data.info.count++;
    }
  }
  return data;
};

module.exports = beatYourBest;
