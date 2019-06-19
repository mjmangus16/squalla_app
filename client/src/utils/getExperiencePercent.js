const getExperiencePercent = exp => {
  const getPercent = (min, max) => {
    let total = max - min;
    let total2 = exp - min;

    let sum = (total2 * 100) / total;
    return Math.floor(sum);
  };

  function getLevel(userExp, min, max, lvl) {
    if (userExp >= min && userExp < max) {
      return getPercent(min, max);
    } else {
      let y = max - min;
      min = max;

      let x;
      if (lvl <= 20) {
        x = y + 100;
      } else {
        x = y + 500;
      }

      max = max + x;
      lvl++;
      return getLevel(userExp, min, max, lvl);
    }
  }

  return getLevel(exp, 0, 50, 1);
};

export default getExperiencePercent;
