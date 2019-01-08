const getAcheivements = (profile, round, allAchieves) => {
  const availableAchieves = available(profile.achievements, allAchieves);
  const achievementsEarned = determine(profile, availableAchieves, round);
  console.log(achievementsEarned.length);
  return achievementsEarned;
};

const available = (myAchieves, allAchieves) => {
  let achievesAvailable = [];
  for (let i = 0; i < allAchieves.length; i++) {
    if (myAchieves.length > 0) {
      for (let j = 0; j < myAchieves.length; j++) {
        if (
          myAchieves[j].code === allAchieves[i].code &&
          allAchieves[i].limit === false
        ) {
          achievesAvailable.push(allAchieves[i]);
        } else if (myAchieves[j].code !== allAchieves[i].code) {
          console.log("Works");
          achievesAvailable.push(allAchieves[i]);
        }
      }
    } else {
      achievesAvailable.push(allAchieves[i]);
    }
  }
  return achievesAvailable;
};

const determine = (profile, available, round) => {
  let earned = [];

  let firstRoundPlayed_ = firstRoundPlayed(available);
  if (firstRoundPlayed_.pass === true) {
    earned.push(firstRoundPlayed_.info);
  }

  let firstTimePlayingCourse_ = firstTimePlayingCourse(
    profile,
    available,
    round
  );
  if (firstTimePlayingCourse_.pass === true) {
    earned.push(firstTimePlayingCourse_.info);
  }
  return earned;
};

const firstRoundPlayed = available => {
  data = {
    pass: false,
    info: []
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

const firstTimePlayingCourse = (profile, available, round) => {
  data = {
    pass: false,
    info: []
  };
  for (let i = 0; i < available.length; i++) {
    if (available[i].code === 2) {
      let pass = true;
      for (let j = 0; j < profile.rounds.length; j++) {
        if (
          profile.rounds[j].course.name === round.course.name &&
          profile.rounds[j] !== profile.rounds[0]
        ) {
          pass = false;
          return pass;
        }
      }
      if (pass === true) {
        data.pass = true;
        data.info = available[i];
        data.info.count++;
        data.info.data.push(round.course.name);
        return data;
      }
    }
  }
};

module.exports = getAcheivements;
