const getExperience = (courseData, level, achievePoints, score, holes) => {
  let userExp, levelExp, achieveExp, averageExp, bestExp;
  const expInfo = {
    rating: courseData.rating,
    level: level,
    achievePoints: achievePoints,
    average: courseData.average,
    best: courseData.best,
    score: score,
    holes: holes
  };

  levelExp = expInfo.level * 2;
  achieveExp = expInfo.achievePoints * 0.5;

  if (score == expInfo.average || expInfo.average === "") {
    averageExp = expInfo.rating * 0.1;
  } else if (score < expInfo.average) {
    averageExp = expInfo.rating * 0.2;
  } else {
    averageExp = 0;
  }

  if (score == expInfo.best || expInfo.best === "") {
    bestExp = expInfo.rating * 0.25;
  } else if (score < expInfo.best) {
    bestExp = expInfo.rating * 0.5;
  } else {
    bestExp = 0;
  }

  userExp = expInfo.rating + levelExp + achieveExp + averageExp + bestExp;

  userExp = userExp / 10;
  userExp = userExp * holes;

  return Math.ceil(userExp);
};

module.exports = getExperience;
