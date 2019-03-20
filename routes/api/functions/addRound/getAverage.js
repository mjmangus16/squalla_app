const getAverage = (round, profile) => {
  let data;
  for (let i = 0; i < profile.courses.length; i++) {
    if (round.course === profile.courses[i].name) {
      for (let y = 0; y < profile.courses[i].tees.length; y++) {
        if (round.tees === profile.courses[i].tees[y].tee) {
          data = profile.courses[i].tees[y].average;
        }
      }
    }
  }
  return data;
};

module.exports = getAverage;
