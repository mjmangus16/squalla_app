const playMultipleRounds = (available, rounds) => {
  data = {
    pass: false,
    info: {}
  };

  let count = 0;

  data.info = available.filter(avail => avail.code === 13)[0];

  rounds.forEach(round => {
    if (round.holes >= 18) {
      count++;
    } else if (round.holes < 18) {
      count = count + 0.5;
    }
  });

  switch (data.info.count) {
    case 0:
      if (count >= 10) {
        data.pass = true;
        data.info.count++;
      }
      break;
    case 1:
      if (count >= 25) {
        data.pass = true;
        data.info.count++;
      }
      break;
    case 2:
      if (count >= 50) {
        data.pass = true;
        data.info.count++;
      }
      break;
    case 3:
      if (count >= 100) {
        data.pass = true;
        data.info.count++;
      }
      break;
    case 4:
      if (count >= 200) {
        data.pass = true;
        data.info.count++;
      }
      break;
    default:
      data.pass = false;
  }

  return data;
};

module.exports = playMultipleRounds;
