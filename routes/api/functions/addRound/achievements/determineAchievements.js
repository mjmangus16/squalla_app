const beatYourBest = require("./achievement/beatYourBest");
const firstRoundPlayed = require("./achievement/firstRoundPlayed");
const firstTimePlayingCourse = require("./achievement/firstTimePlayingCourse");
const frontNineWarmup = require("./achievement/frontNineWarmup");
const lessThanEighteenHoles = require("./achievement/lessThanEighteenHoles");
const playCourseMultipleSameDay = require("./achievement/playCourseMultipleSameDay");
const playCourseMultipleTimes = require("./achievement/playCourseMultipleTimes");
const playMultipleCourses = require("./achievement/playMultipleCourses");
const two_threeCoursesSameDay = require("./achievement/two_threeCoursesSameDay");
const playWithSomeoneFirstTime = require("./achievement/playWithSomeoneFirstTime");
const playMultipleRounds = require("./achievement/playMultipleRounds");
const earnPositiveRating5 = require("./achievement/earnPositiveRating5");
const earnPositiveRating10 = require("./achievement/earnPositiveRating10");
const earnPositiveRating15 = require("./achievement/earnPositiveRating15");
const crowdedRound = require("./achievement/crowdedRound");
const partyRound = require("./achievement/partyRound");
const winMatch3 = require("./achievement/winMatch3");
const winMatch6 = require("./achievement/winMatch6");
const winMatch10 = require("./achievement/winMatch10");
const stopTheBleeding = require("./achievement/stopTheBleeding");

const determineAchievements = (profile, available, round, courseData) => {
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

  let playWithSomeoneFirstTime_ = playWithSomeoneFirstTime(
    available,
    round,
    profile.username
  );
  if (playWithSomeoneFirstTime_.pass === true) {
    earned.push(playWithSomeoneFirstTime_.info);
  }

  let playMultipleRounds_ = playMultipleRounds(available, profile.rounds);
  if (playMultipleRounds_.pass === true) {
    earned.push(playMultipleRounds_.info);
  }

  let earnPositiveRating5_ = earnPositiveRating5(
    available,
    profile.performancePoints
  );
  if (earnPositiveRating5_.pass === true) {
    earned.push(earnPositiveRating5_.info);
  }

  let earnPositiveRating10_ = earnPositiveRating10(
    available,
    profile.performancePoints
  );
  if (earnPositiveRating10_.pass === true) {
    earned.push(earnPositiveRating10_.info);
  }

  let earnPositiveRating15_ = earnPositiveRating15(
    available,
    profile.performancePoints
  );
  if (earnPositiveRating15_.pass === true) {
    earned.push(earnPositiveRating15_.info);
  }

  let crowdedRound_ = crowdedRound(available, round);
  if (crowdedRound_.pass === true) {
    earned.push(crowdedRound_.info);
  }

  let partyRound_ = partyRound(available, round);
  if (partyRound_.pass === true) {
    earned.push(partyRound_.info);
  }

  let winMatch3_ = winMatch3(available, round, profile.username);
  if (winMatch3_.pass === true) {
    earned.push(winMatch3_.info);
  }

  let winMatch6_ = winMatch6(available, round, profile.username);
  if (winMatch6_.pass === true) {
    earned.push(winMatch6_.info);
  }

  let winMatch10_ = winMatch10(available, round, profile.username);
  if (winMatch10_.pass === true) {
    earned.push(winMatch10_.info);
  }

  let stopTheBleeding_ = stopTheBleeding(
    available,
    round,
    profile.rounds,
    profile.username
  );
  if (stopTheBleeding_.pass === true) {
    earned.push(stopTheBleeding_.info);
  }

  return earned;
};

module.exports = determineAchievements;
