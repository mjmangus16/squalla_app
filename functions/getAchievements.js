const getAcheivements = (profile, round, allAchieves) => {
  const availableAchieves = available(profile.achievements, allAchieves);

  const achievementsEarned = determine(profile, availableAchieves, round);

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

const determine = (profile, available, round) => {
  let earned = [];

  let firstRoundPlayed_ = firstRoundPlayed(available);
  if (firstRoundPlayed_.pass === true) {
    earned.push(firstRoundPlayed_.info);
  }

  let firstTimePlayingCourse_ = firstTimePlayingCourse(available, round);
  if (firstTimePlayingCourse_.pass === true) {
    earned.push(firstTimePlayingCourse_.info);
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

module.exports = getAcheivements;
