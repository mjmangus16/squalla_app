const getAcheivements = (profile, round, allAchieves, courseData) => {
  const availableAchieves = available(profile.achievements, allAchieves);

  const achievementsEarned = determine(
    profile,
    availableAchieves,
    round,
    courseData
  );

  return achievementsEarned;
};

const available = (myAchieves, allAchieves) => {
  let achievesAvailable = [];

  if (myAchieves.length > 0) {
    achievesAvailable = allAchieves;

    for (let i = 0; i < myAchieves.length; i++) {
      if (myAchieves[i].limit === true) {
        for (let j = 0; j < achievesAvailable.length; j++) {
          if (myAchieves[i].code === achievesAvailable[j].code) {
            achievesAvailable.splice(j, 1);
          }
        }
      } else {
        for (let j = 0; j < achievesAvailable.length; j++) {
          if (myAchieves[i].code === achievesAvailable[j].code) {
            achievesAvailable[j] = myAchieves[i];
          }
        }
      }
    }
  } else {
    achievesAvailable = allAchieves;
  }
  return achievesAvailable;
};

const determine = (profile, available, round, courseData) => {
  let earned = [];

  let firstRoundPlayed_ = firstRoundPlayed(available);
  if (firstRoundPlayed_.pass === true) {
    earned.push(firstRoundPlayed_.info);
  }

  let firstTimePlayingCourse_ = firstTimePlayingCourse(available, round);
  if (firstTimePlayingCourse_.pass === true) {
    earned.push(firstTimePlayingCourse_.info);
  }

  if (courseData.courseInfo.history.length < 101) {
    let playCourseMultipleTimes_ = playCourseMultipleTimes(
      available,
      courseData
    );
    if (playCourseMultipleTimes_.pass === true) {
      earned.push(playCourseMultipleTimes_.info);
    }
  }

  if (profile.courses.length >= 5) {
    let playMultipleCourses_ = playMultipleCourses(
      available,
      profile.courses,
      profile.rounds
    );
    if (playMultipleCourses_.pass === true) {
      earned.push(playMultipleCourses_.info);
    }
  }

  let playCourseMultipleSameDay_ = playCourseMultipleSameDay(
    available,
    profile.rounds,
    round
  );
  if (playCourseMultipleSameDay_.pass === true) {
    earned.push(playCourseMultipleSameDay_.info);
  }

  let two_threeCoursesSameDay_ = two_threeCoursesSameDay(
    available,
    profile.rounds,
    round
  );
  if (two_threeCoursesSameDay_.pass === true) {
    earned.push(two_threeCoursesSameDay_.info);
  }

  let lessThanEighteenHoles_ = lessThanEighteenHoles(available, round);
  if (lessThanEighteenHoles_.pass === true) {
    earned.push(lessThanEighteenHoles_.info);
  }

  let frontNineWarmup_ = frontNineWarmup(available, round);
  if (frontNineWarmup_.pass === true) {
    earned.push(frontNineWarmup_.info);
  }

  let beatYourBest_ = beatYourBest(available, courseData.userStats);
  if (beatYourBest_.pass === true) {
    earned.push(beatYourBest_.info);
  }

  return earned;
};

const firstRoundPlayed = available => {
  data = {
    pass: false,
    info: {}
  };
  for (let i = 0; i < available.length; i++) {
    if (available[i].code === 1) {
      data.pass = true;
      data.info = available[i];
      data.info.count++;
    }
  }
  return data;
};

const firstTimePlayingCourse = (available, round) => {
  data = {
    pass: true,
    info: {}
  };

  for (let i = 0; i < available.length; i++) {
    if (available[i].code === 2) {
      data.info = available[i];
    }
  }

  for (let j = 0; j < data.info.data.length; j++) {
    if (data.info.data[j] === round.course.name) {
      data.pass = false;
    }
  }

  if (data.pass === true) {
    data.info.count++;
    data.info.data.push(round.course.name);
  }
  return data;
};

const playCourseMultipleTimes = (available, courseData) => {
  data = {
    pass: false,
    info: {}
  };

  for (let i = 0; i < available.length; i++) {
    if (available[i].code === 3) {
      data.info = available[i];
    }
  }

  if (courseData.courseInfo.history.length === 10) {
    data.pass = true;
    data.info.count++;
    data.info.data.push({ course: courseData.courseInfo.name, count: 10 });
  } else if (courseData.courseInfo.history.length === 25) {
    data.pass = true;
    data.info.count++;
    for (let i = 0; i < data.info.data.length; i++) {
      if (data.info.data[i].course === courseData.courseInfo.name) {
        data.info.data.push({ course: courseData.courseInfo.name, count: 25 });
      }
    }
  } else if (courseData.courseInfo.history.length === 50) {
    data.pass = true;
    data.info.count++;
    for (let i = 0; i < data.info.data.length; i++) {
      if (data.info.data[i].course === courseData.courseInfo.name) {
        data.info.data.push({ course: courseData.courseInfo.name, count: 50 });
      }
    }
  } else if (courseData.courseInfo.history.length === 100) {
    data.pass = true;
    data.info.count++;
    for (let i = 0; i < data.info.data.length; i++) {
      if (data.info.data[i].course === courseData.courseInfo.name) {
        data.info.data.push({ course: courseData.courseInfo.name, count: 100 });
      }
    }
  }

  return data;
};

const playMultipleCourses = (available, courses, rounds) => {
  data = {
    pass: false,
    info: {}
  };

  for (let i = 0; i < available.length; i++) {
    if (available[i].code === 4) {
      data.info = available[i];
    }
  }

  let coursesContainer = [];
  for (let i = 0; i < rounds.length; i++) {
    coursesContainer.push(rounds[i].course.name);
  }

  data.info.data = [];

  for (let j = 0; j < courses.length; j++) {
    if (coursesContainer.includes(courses[j].name)) {
      data.info.data.push(courses[j].name);
    }
  }

  if (data.info.data.length === 5) {
    data.pass = true;
    data.info.count++;
  } else if (data.info.data.length === 10) {
    data.pass = true;
    data.info.count++;
  } else if (data.info.data.length === 25) {
    data.pass = true;
    data.info.count++;
  } else if (data.info.data.length === 50) {
    data.pass = true;
    data.info.count++;
  }

  return data;
};

const playCourseMultipleSameDay = (available, myRounds, round) => {
  data = {
    pass: false,
    info: {}
  };

  for (let i = 0; i < available.length; i++) {
    if (available[i].code === 5) {
      data.info = available[i];
    }
  }

  let date = round.date;
  let count = 0;

  for (let i = 0; i < myRounds.length; i++) {
    if (myRounds[i].course.name === round.course.name) {
      if (myRounds[i].date === date) {
        count++;
      }
    }
  }

  if (count > 1) {
    data.pass = true;
    data.info.count++;
    data.info.points = 0;
    for (let j = 1; j < count; j++) {
      data.info.points = data.info.points + 2;
    }

    data.info.data.push({ course: round.course, date: date, count: count });
  }

  return data;
};

const two_threeCoursesSameDay = (available, myRounds, round) => {
  data = {
    pass: false,
    info: {}
  };

  let sameDayRounds = [];

  if (round.course.holes >= 18) {
    for (let i = 0; i < myRounds.length; i++) {
      if (myRounds[i].date === round.date && myRounds[i].course.holes >= 18) {
        sameDayRounds.push(myRounds[i].course.name);
      }
    }
  }

  let uniq;

  if (sameDayRounds.length >= 2 && sameDayRounds.length <= 3) {
    if (sameDayRounds.length === 2) {
      for (let i = 0; i < available.length; i++) {
        if (available[i].code === 7) {
          data.info = available[i];
        }
      }
    } else if (sameDayRounds.length === 3) {
      for (let i = 0; i < available.length; i++) {
        if (available[i].code === 6) {
          data.info = available[i];
        }
      }
    }
    uniq = [...new Set(sameDayRounds)];
    data.pass = true;
    data.info.data.push({ date: round.date, courses: uniq });
    data.info.count++;
  }

  return data;
};

const lessThanEighteenHoles = (available, round) => {
  data = {
    pass: false,
    info: {}
  };

  if (round.course.holes < 18) {
    for (let i = 0; i < available.length; i++) {
      if (available[i].code === 8) {
        data.info = available[i];
        if (!data.info.data.includes(round.course.name)) {
          data.info.data.push(round.course.name);
          data.info.count++;
          data.pass = true;
        } else {
          data.pass = false;
        }
      }
    }
  }
  return data;
};

const frontNineWarmup = (available, round) => {
  data = {
    pass: false,
    info: {}
  };

  if (round.course.holes >= 27) {
    for (let i = 0; i < available.length; i++) {
      if (available[i].code === 9) {
        data.info = available[i];
      }
    }
    if (!data.info.data.includes(round.course.name)) {
      data.info.data.push(round.course.name);
      data.info.count++;
      data.pass = true;
    } else {
      data.pass = false;
    }
  }

  return data;
};

const beatYourBest = (available, myStats) => {
  data = {
    pass: false,
    info: {}
  };

  if (myStats.best !== "N/A") {
    if (myStats.best > myStats.score) {
      for (let i = 0; i < available.length; i++) {
        if (available[i].code === 10) {
          data.info = available[i];
        }
      }
      data.pass = true;
      data.info.count++;
    }
  }
  return data;
};

module.exports = getAcheivements;
