const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data, players, scores) {
  let errors = {};

  data.course = !isEmpty(data.course) ? data.course : "";
  data.players = !isEmpty(data.players) ? data.players : "";
  data.scores = !isEmpty(data.scores) ? data.scores : "";
  data.tees = !isEmpty(data.tees) ? data.tees : "";
  players = !isEmpty(players) ? players : "";
  scores = !isEmpty(scores) ? scores : "";

  if (validator.isEmpty(data.course)) {
    errors.course = "You must select the course you played";
  }

  if (validator.isEmpty(data.players)) {
    errors.players = "There must be at least one player selected for the round";
  }

  if (validator.isEmpty(data.scores)) {
    errors.scores = "You must input the scores for each player";
  }

  if (validator.isEmpty(data.tees)) {
    errors.tees = "You must select the tees played for the round";
  }

  if (!validator.equals(players.length.toString(), scores.length.toString())) {
    errors.playersScores =
      "There must be the same amount of scores as players for the round";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
