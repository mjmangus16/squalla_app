const getTotalAchievementsEarned = achievements => {
  let count = 0;

  achievements.forEach(achieve => (count = count + achieve.count));

  return count;
};

module.exports = getTotalAchievementsEarned;
