const collectCourseHistory = (course, roundHistory, username, tees) => {
  let courseHistory = [];

  roundHistory.forEach(round => {
    let data = {};
    if (round.course === course.name) {
      if (round.tees === tees) {
        data.date = round.date;
        data.league = round.league;
        data.tees = round.tees;

        round.scores.forEach(player => {
          if (player.username === username) {
            data.score = player.score;
          }
        });
      }
      courseHistory.push(data);
    }
  });

  return courseHistory;
};

module.exports = collectCourseHistory;
