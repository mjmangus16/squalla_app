const lessThanEighteenHoles = (available, round) => {
  data = {
    pass: false,
    info: {}
  };

  if (round.holes < 18) {
    data.info = available.filter(avail => avail.code === 1)[0];

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

module.exports = lessThanEighteenHoles;
