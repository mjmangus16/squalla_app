const beatYourBest = (available, myStats) => {
  data = {
    pass: false,
    info: {}
  };

  if (myStats.best !== "N/A") {
    if (myStats.best > myStats.score) {
      available.forEach(avail => {
        if (avail.code === 10) data.info = avail;
      });

      data.pass = true;
      data.info.count++;
    }
  }
  return data;
};

module.exports = beatYourBest;
