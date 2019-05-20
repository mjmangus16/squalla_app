const compareAchievements = (mine, earned) => {
  if (earned.length > 0) {
    earned.forEach(e => {
      let exists = false;
      mine.forEach(m => {
        if (e.code === m.code) {
          exists = true;
          m = e;
        }
      });
      if (!exists) {
        mine.push(e);
      }
    });
  }
  return mine;
};

module.exports = compareAchievements;
