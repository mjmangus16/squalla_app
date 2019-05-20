const frontNineWarmup = (available, round) => {
  data = {
    pass: false,
    info: {}
  };

  if (round.holes >= 27) {
    data.info = available.filter(avail => avail.code === 9)[0];
    if (!data.info.data.includes(round.course)) {
      data.info.data.push(round.course);
      data.info.count++;
      data.pass = true;
    } else {
      data.pass = false;
    }
  }

  return data;
};

module.exports = frontNineWarmup;
