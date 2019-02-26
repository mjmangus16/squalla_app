const compareAchievements = (mine, earned) => {
  if (earned.length > 0) {
    for (let i = 0; i < earned.length; i++) {
      let exists = false;
      for (let j = 0; j < mine.length; j++) {
        if (earned[i].code === mine[j].code) {
          exists = true;
          mine[j] = earned[i];
        }
      }
      if (!exists) {
        mine.push(earned[i]);
      }
    }
  }
  return mine;
};

module.exports = compareAchievements;
