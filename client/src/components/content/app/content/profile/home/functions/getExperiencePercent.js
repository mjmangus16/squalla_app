const getExperiencePercent = (exp, lvl) => {
  const getPercent = (min, max) => {
    let total = max - min;
    let total2 = exp - min;

    let sum = (total2 * 100) / total;
    return Math.floor(sum);
  };

  switch (lvl) {
    case 1:
      return getPercent(0, 50);
    case 2:
      return getPercent(50, 225);
    case 3:
      return getPercent(225, 450);
    case 4:
      return 750;
    case 5:
      return 1125;
    case 6:
      return 1575;
    case 7:
      return 2100;
    case 8:
      return 2700;
    case 9:
      return 3375;
    case 10:
      return 4125;
    case 11:
      return 4950;
    case 12:
      return 5850;
    case 13:
      return 6825;
    case 14:
      return 7875;
    case 15:
      return 9000;
    case 16:
      return 10200;
    case 17:
      return 11475;
    case 18:
      return 12825;
    case 19:
      return 14250;
  }
};

module.exports = getExperiencePercent;
