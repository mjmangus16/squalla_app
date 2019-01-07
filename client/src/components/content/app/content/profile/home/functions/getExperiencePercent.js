const getExperiencePercent = (exp, lvl) => {
  const getPercent = (min, max) => {
    if (exp > max) {
      return getExperiencePercent(exp, parseInt(lvl + 1));
    } else {
      let total = max - min;
      let total2 = exp - min;

      let sum = (total2 * 100) / total;
      return Math.floor(sum);
    }
  };

  switch (lvl) {
    case 1:
      return getPercent(0, 50);
    case 2:
      return getPercent(50, 225);
    case 3:
      return getPercent(225, 450);
    case 4:
      return getPercent(450, 750);
    case 5:
      return getPercent(750, 1125);
    case 6:
      return getPercent(1125, 1575);
    case 7:
      return getPercent(1575, 2100);
    case 8:
      return getPercent(2100, 2700);
    case 9:
      return getPercent(2700, 3375);
    case 10:
      return getPercent(3375, 4125);
    case 11:
      return getPercent(4125, 4950);
    case 12:
      return getPercent(4950, 5850);
    case 13:
      return getPercent(5850, 6825);
    case 14:
      return getPercent(6825, 7875);
    case 15:
      return getPercent(7875, 9000);
    case 16:
      return getPercent(9000, 10200);
    case 17:
      return getPercent(10200, 11475);
    case 18:
      return getPercent(11475, 12825);
    case 19:
      return getPercent(12825, 14250);
    case 20:
      return getPercent(14250, 15750);
  }
};

module.exports = getExperiencePercent;
