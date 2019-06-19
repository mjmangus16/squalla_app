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
      return getPercent(50, 150);
    case 3:
      return getPercent(150, 400);
    case 4:
      return getPercent(400, 750);
    case 5:
      return getPercent(750, 1200);
    case 6:
      return getPercent(1200, 1750);
    case 7:
      return getPercent(1750, 2400);
    case 8:
      return getPercent(2400, 3150);
    case 9:
      return getPercent(3150, 4000);
    case 10:
      return getPercent(4000, 4950);
    case 11:
      return getPercent(4950, 6000);
    case 12:
      return getPercent(6000, 7150);
    case 13:
      return getPercent(7150, 8400);
    case 14:
      return getPercent(8400, 9750);
    case 15:
      return getPercent(9750, 11200);
    case 16:
      return getPercent(11200, 12750);
    case 17:
      return getPercent(12750, 14400);
    case 18:
      return getPercent(14400, 16150);
    case 19:
      return getPercent(16150, 18000);
    case 20:
      return getPercent(18000, 19950);
    case 21:
      return getPercent(19950, 22400);
    case 22:
      return getPercent(22400, 25350);
    case 23:
      return getPercent(25350, 28800);
    case 24:
      return getPercent(28800, 32750);
    case 25:
      return getPercent(32750, 37200);
    case 26:
      return getPercent(37200, 42150);
    case 27:
      return getPercent(42150, 47600);
    case 28:
      return getPercent(47600, 53550);
    case 29:
      return getPercent(53550, 60000);
    case 30:
      return getPercent(60000, 66950);
    default:
      return 0;
  }
};

export default getExperiencePercent;
