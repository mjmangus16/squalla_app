const getExp = (courseRating, courseStats, userInfo, score) => {
  let userExp, levelExp, achieveExp, averageExp, bestExp;
  const expInfo = {
    rating: courseRating,
    level: userInfo.level,
    achievePoints: 50,
    average: courseStats.average,
    best: courseStats.best,
    score: score,
    holes: courseStats.holes
  };

  levelExp = expInfo.level * 2;
  achieveExp = expInfo.achievePoints * 0.5;

  if (score == expInfo.average || expInfo.average === "N/A") {
    averageExp = expInfo.rating * 0.1;
  } else if (score < expInfo.average) {
    averageExp = expInfo.rating * 0.2;
  } else {
    averageExp = 0;
  }

  if (score == expInfo.best || expInfo.best === "N/A") {
    bestExp = expInfo.rating * 0.25;
  } else if (score < expInfo.best) {
    bestExp = expInfo.rating * 0.5;
  } else {
    bestExp = 0;
  }

  userExp = expInfo.rating + levelExp + achieveExp + averageExp + bestExp;

  userExp = userExp / 10;
  userExp = userExp * expInfo.holes;

  return Math.ceil(userExp);
};

module.exports = getExp;
