const determineAchievements = require("./determineAchievements");

const getAcheivements = (profile, round, allAchieves, courseData) => {
  const availableAchieves = available(profile.achievements, allAchieves);

  const achievementsEarned = determineAchievements(
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

module.exports = getAcheivements;
