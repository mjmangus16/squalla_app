const levels = userExp => {
  if (userExp < 50) {
    return 1;
  } else if (userExp >= 50 && userExp < 225) {
    return 2;
  } else if (userExp >= 225 && userExp < 450) {
    return 3;
  } else if (userExp >= 450 && userExp < 750) {
    return 4;
  } else if (userExp >= 750 && userExp < 1125) {
    return 5;
  } else if (userExp >= 1125 && userExp < 1575) {
    return 6;
  } else if (userExp >= 1575 && userExp < 2100) {
    return 7;
  } else if (userExp >= 2100 && userExp < 2700) {
    return 8;
  } else if (userExp >= 2700 && userExp < 3375) {
    return 9;
  } else if (userExp >= 3375 && userExp < 4125) {
    return 10;
  } else if (userExp >= 4125 && userExp < 4950) {
    return 11;
  } else if (userExp >= 4950 && userExp < 5850) {
    return 12;
  } else if (userExp >= 5850 && userExp < 6825) {
    return 13;
  } else if (userExp >= 6825 && userExp < 7875) {
    return 14;
  } else if (userExp >= 7875 && userExp < 9000) {
    return 15;
  } else if (userExp >= 9000 && userExp < 10200) {
    return 16;
  } else if (userExp >= 10200 && userExp < 11475) {
    return 17;
  } else if (userExp >= 11475 && userExp < 12825) {
    return 18;
  } else if (userExp >= 12825 && userExp < 14250) {
    return 19;
  } else if (userExp >= 14250 && userExp < 15750) {
    return 20;
  }
};

module.exports = levels;
