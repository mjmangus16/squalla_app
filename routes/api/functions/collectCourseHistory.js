const collectCourseHistory = (course, roundHistory, username) => {
  let courseHistory = [];

  for (let j = 0; j < roundHistory.length; j++) {
    let round = {};
    if (roundHistory[j].course === course.name) {
      round.date = roundHistory[j].date;
      round.league = roundHistory[j].league;
      round.tees = roundHistory[j].tees;

      for (let i = 0; i < roundHistory[j].scores.length; i++) {
        if (roundHistory[j].scores[i].username === username) {
          round.score = roundHistory[j].scores[i].score;
        }
      }

      courseHistory.push(round);
    }
  }
  return courseHistory;
};

module.exports = collectCourseHistory;
