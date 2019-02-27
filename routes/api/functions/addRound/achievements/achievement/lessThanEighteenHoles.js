const lessThanEighteenHoles = (available, round) => {
  data = {
    pass: false,
    info: {}
  };

  if (round.course.holes < 18) {
    for (let i = 0; i < available.length; i++) {
      if (available[i].code === 8) {
        data.info = available[i];
        if (!data.info.data.includes(round.course)) {
          data.info.data.push(round.course);
          data.info.count++;
          data.pass = true;
        } else {
          data.pass = false;
        }
      }
    }
  }
  return data;
};

module.exports = lessThanEighteenHoles;
