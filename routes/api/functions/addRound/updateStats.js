const updateStats = (profile, round, score) => {
  let average, best;
  for (let i = 0; i < profile.courses.length; i++) {
    if (profile.courses[i].name === round.course) {
      for (let y = 0; y < profile.courses[i].tees.length; y++) {
        if (profile.courses[i].tees[y].tee === round.tees) {
          average = profile.courses[i].tees[y].average;
          best = profile.courses[i].tees[y].best;
          profile.courses[i].tees[y].rounds++;
          if (best > score || best === "") {
            profile.courses[i].tees[y].best = parseInt(score);
          }
          if (average === "") {
            profile.courses[i].tees[y].average = parseInt(score);
          } else {
            let sum = parseInt(average) + parseInt(score);
            let newAverage = Math.round(sum / 2);
            profile.courses[i].tees[y].average = newAverage;
          }
        }
      }
    }
  }
  return profile;
};

module.exports = updateStats;
