const firstRoundPlayed = available => {
  data = {
    pass: false,
    info: {}
  };
  for (let i = 0; i < available.length; i++) {
    if (available[i].code === 1) {
      data.pass = true;
      data.info = available[i];
      data.info.count++;
    }
  }
  return data;
};

module.exports = firstRoundPlayed;
