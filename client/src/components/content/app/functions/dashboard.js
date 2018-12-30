const getDashboardData = profile => {
  const myScore = () => {
    for (let i = 0; i < profile.rounds[0].scores.length; i++) {
      if (profile.rounds[0].scores[i].player === profile.username) {
        return profile.rounds[0].scores[i].score;
      }
    }
  };

  for (let j = 0; j < profile.rounds.length; j++) {
    for (let k = 0; k < profile.courses.length; k++) {
      if (profile.rounds[j].course.name === profile.courses[k].name) {
        profile.courses[k].history.unshift(profile.rounds[j]);
      }
    }
  }

  let coursesPlayed = 0;

  for (let y = 0; y < profile.courses.length; y++) {
    if (profile.courses[y].history.length > 0) {
      coursesPlayed++;
    }
  }

  let dashboard = {
    level: profile.level,
    exp: profile.exp,
    username: profile.username,
    roundsPlayed: profile.rounds.length,
    coursesPlayed: coursesPlayed,
    achievePoints: profile.achievePoints
  };

  if (profile.rounds[0]) {
    dashboard.recentRound = {
      date: profile.rounds[0].date,
      course: profile.rounds[0].course.name,
      tees: profile.rounds[0].course.tees,
      score: myScore()
    };
  } else {
    dashboard.recentRound = {
      date: "N/A",
      course: "N/A",
      tees: "N/A",
      score: "N/A"
    };
  }

  if (profile.achievements[0]) {
    dashboard.recentAchieve = profile.achievements[0];
  } else {
    dashboard.recentAchieve = "N/A";
  }

  return dashboard;
};

module.exports = getDashboardData;
