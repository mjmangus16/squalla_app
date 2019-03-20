const getTotalAchievementsEarned = achievements => {
  let count = 0;

  for (let i = 0; i < achievements.length; i++) {
    count = count + achievements[i].count;
  }

  return count;
};

module.exports = getTotalAchievementsEarned;
