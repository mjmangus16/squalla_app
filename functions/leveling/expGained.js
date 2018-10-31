const expGained = (
  userLevel,
  userAchievePoints,
  coursePar,
  holes,
  averageScore,
  bestScore,
  score
) => {
  const baseExp = 50;
  let totalExp = 0;
  let levelExp = 0;
  let achieveExp = 0;
  let difficultyExp = 0;
  let parExp = 0;
  let averageExp = 0;
  let bestExp = 0;

  let container;

  container = userLevel * 0.01;
  levelExp = baseExp * container;

  container = userAchievePoints * 0.01;
  achieveExp = container * baseExp;

  container = coursePar / holes;
  container = container * 0.1;
  difficultyExp = container * baseExp;

  if (score >= coursePar) {
    container = score - coursePar;
    container = container * 0.01;
    parExp = container * baseExp;
    totalExp = totalExp - parExp;
  } else if (score < coursePar) {
    container = coursePar - score;
    container = container * 0.01;
    parExp = container * baseExp;
    totalExp = totalExp + parExp;
  }

  if (score < averageScore) {
    averageExp = 10;
  }

  if (score < bestScore) {
    bestExp = 15;
  }

  totalExp =
    totalExp +
    baseExp +
    levelExp +
    achieveExp +
    difficultyExp +
    averageExp +
    bestExp;
  return totalExp;
};

module.exports = expGained;
