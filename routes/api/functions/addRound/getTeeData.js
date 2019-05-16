const getTeeData = (profile, round) => {
  let data = {};
  let coursePlayed = profile.courses.filter(
    course => course.name === round.course
  )[0];

  let teesPlayed = coursePlayed.tees.filter(tee => tee.tee === round.tees)[0];

  data = {
    average: teesPlayed.average,
    best: teesPlayed.best
  };

  return data;
};

module.exports = getTeeData;
