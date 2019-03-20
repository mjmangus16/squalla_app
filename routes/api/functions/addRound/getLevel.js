const getLevel = userExp => {
  if (userExp < 50) {
    return 1;
  } else if (userExp >= 50 && userExp < 150) {
    return 2;
  } else if (userExp >= 150 && userExp < 400) {
    return 3;
  } else if (userExp >= 400 && userExp < 750) {
    return 4;
  } else if (userExp >= 750 && userExp < 1200) {
    return 5;
  } else if (userExp >= 1200 && userExp < 1750) {
    return 6;
  } else if (userExp >= 1750 && userExp < 2400) {
    return 7;
  } else if (userExp >= 2400 && userExp < 3150) {
    return 8;
  } else if (userExp >= 3150 && userExp < 4000) {
    return 9;
  } else if (userExp >= 4000 && userExp < 4950) {
    return 10;
  } else if (userExp >= 4950 && userExp < 6000) {
    return 11;
  } else if (userExp >= 6000 && userExp < 7150) {
    return 12;
  } else if (userExp >= 7150 && userExp < 8400) {
    return 13;
  } else if (userExp >= 8400 && userExp < 9750) {
    return 14;
  } else if (userExp >= 9750 && userExp < 11200) {
    return 15;
  } else if (userExp >= 11200 && userExp < 12750) {
    return 16;
  } else if (userExp >= 12750 && userExp < 14400) {
    return 17;
  } else if (userExp >= 14400 && userExp < 16150) {
    return 18;
  } else if (userExp >= 16150 && userExp < 18000) {
    return 19;
  } else if (userExp >= 18000 && userExp < 19950) {
    return 20;
  }
};

module.exports = getLevel;
