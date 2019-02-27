const beatYourBest = (available, myStats) => {
  data = {
    pass: false,
    info: {}
  };

  if (myStats.best !== "N/A") {
    if (myStats.best > myStats.score) {
      for (let i = 0; i < available.length; i++) {
        if (available[i].code === 10) {
          data.info = available[i];
        }
      }
      data.pass = true;
      data.info.count++;
    }
  }
  return data;
};

module.exports = beatYourBest;
