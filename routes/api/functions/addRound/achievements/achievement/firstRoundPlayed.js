const firstRoundPlayed = available => {
  data = {
    pass: false,
    info: {}
  };

  available.forEach(avail => {
    if (avail.code === 1) {
      data.pass = true;
      data.info = avail;
      data.info.count++;
    }
  });

  return data;
};

module.exports = firstRoundPlayed;
