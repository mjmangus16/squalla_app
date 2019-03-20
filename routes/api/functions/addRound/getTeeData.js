const getTeeData = (profile, round) => {
  let data = {};
  for (let i = 0; i < profile.courses.length; i++) {
    if (profile.courses[i].name === round.course) {
      for (let y = 0; y < profile.courses[i].tees.length; y++) {
        if (profile.courses[i].tees[y].tee === round.tees) {
          data = {
            average: profile.courses[i].tees[y].average,
            best: profile.courses[i].tees[y].best
          };
        }
      }
    }
  }
  return data;
};

module.exports = getTeeData;
