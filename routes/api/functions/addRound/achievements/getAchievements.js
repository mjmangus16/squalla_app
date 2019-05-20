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

    myAchieves.forEach(myA => {
      if (myA.limit === true) {
        achievesAvailable.forEach((aAvail, i) => {
          if (myA.code === aAvail.code) achievesAvailable.splice(i, 1);
        });
      } else {
        achievesAvailable.forEach(aAvail => {
          if (myA.code === aAvail.code) aAvail = myA;
        });
      }
    });
  } else {
    achievesAvailable = allAchieves;
  }
  console.log(achievesAvailable);
  return achievesAvailable;
};

module.exports = getAcheivements;
