const firstRoundPlayed = available => {
  data = {
    pass: false,
    info: {}
  };
  data.info = available.filter(avail => avail.code === 1)[0];
  data.pass = true;
  data.info.count++;

  return data;
};

module.exports = firstRoundPlayed;
