const levels = userExp => {
  if (userExp < 75) {
    return 1;
  } else if (userExp >= 75 && userExp < 225) {
    return 2;
  } else if (userExp >= 225 && userExp < 450) {
    return 3;
  }
};

module.exports = levels;
