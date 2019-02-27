const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.date = !isEmpty(data.date) ? data.date : "";
  data.course = !isEmpty(data.course) ? data.course : "";
  data.tees = !isEmpty(data.tees) ? data.tees : "";
  data.players = !isEmpty(data.players) ? data.players : "";
  data.scores = !isEmpty(data.scores) ? data.scores : "";

  if (validator.isEmpty(data.date)) {
    errors.date = "You must provide the date the round was played";
  }

  if (validator.isEmpty(data.course)) {
    errors.course = "You must select the course you played";
  }

  if (validator.isEmpty(data.tees)) {
    errors.tees = "You must select the tees played for the round";
  }

  if (validator.isEmpty(data.players)) {
    errors.players = "There must be at least one player selected for the round";
  }

  if (validator.isEmpty(data.scores)) {
    errors.scores = "You must input the scores for each player";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
