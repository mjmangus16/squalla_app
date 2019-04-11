const playMultipleRounds = (available, rounds) => {
  data = {
    pass: false,
    info: {}
  };

  let eligibleRounds = [];

  for (let i = 0; i < available.length; i++) {
    if (available[i].code === 13) {
      data.info = available[i];
    }
  }

  for (let i = 0; i < rounds.length; i++) {
    if (rounds[i].holes >= 18) {
      eligibleRounds.push(rounds[i]);
    }
  }

  if (data.info.count === 0) {
    if (eligibleRounds.length >= 200) {
      data.pass = true;
      data.info.count = data.info.count + 5;
    } else if (eligibleRounds.length >= 100) {
      data.pass = true;
      data.info.count = data.info.count + 4;
    } else if (eligibleRounds.length >= 50) {
      data.pass = true;
      data.info.count = data.info.count + 3;
    } else if (eligibleRounds.length >= 25) {
      data.pass = true;
      data.info.count = data.info.count + 2;
    } else if (eligibleRounds.length >= 10) {
      data.pass = true;
      data.info.count++;
    }
  } else if (data.info.count === 1) {
    if (eligibleRounds.length >= 200) {
      data.pass = true;
      data.info.count = data.info.count + 4;
    } else if (eligibleRounds.length >= 100) {
      data.pass = true;
      data.info.count = data.info.count + 3;
    } else if (eligibleRounds.length >= 50) {
      data.pass = true;
      data.info.count = data.info.count + 2;
    } else if (eligibleRounds.length >= 25) {
      data.pass = true;
      data.info.count = data.info.count + 1;
    }
  } else if (data.info.count === 2) {
    if (eligibleRounds.length >= 200) {
      data.pass = true;
      data.info.count = data.info.count + 3;
    } else if (eligibleRounds.length >= 100) {
      data.pass = true;
      data.info.count = data.info.count + 2;
    } else if (eligibleRounds.length >= 50) {
      data.pass = true;
      data.info.count = data.info.count + 1;
    }
  } else if (data.info.count === 3) {
    if (eligibleRounds.length >= 200) {
      data.pass = true;
      data.info.count = data.info.count + 2;
    } else if (eligibleRounds.length >= 100) {
      data.pass = true;
      data.info.count = data.info.count + 1;
    }
  } else if (data.info.count === 4) {
    if (eligibleRounds.length >= 200) {
      data.pass = true;
      data.info.count = data.info.count + 1;
    }
  }

  return data;
};

module.exports = playMultipleRounds;
