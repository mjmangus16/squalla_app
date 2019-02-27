const updateAchievements = earned => {
  let data = {
    points: 0,
    achieves: []
  };
  if (earned.length > 0) {
    for (let i = 0; i < earned.length; i++) {
      data.points = data.points + earned[i].points;
      data.achieves.push(earned[i]);
    }
  }

  return data;
};

module.exports = updateAchievements;
