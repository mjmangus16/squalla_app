const updateAchievements = earned => {
  let data = {
    points: 0,
    achieves: []
  };
  if (earned.length > 0) {
    earned.forEach(e => {
      data.points = data.points + e.points;
      data.achieves.push(e);
    });
  }

  return data;
};

module.exports = updateAchievements;
