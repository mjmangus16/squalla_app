const collectCourseHistory = (course, roundHistory, username, tees) => {
  let courseHistory = [];

  courseHistory = roundHistory.map(round => {
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
    }
    console.log(data);
    return data;
  });

  return courseHistory;
};

module.exports = collectCourseHistory;
