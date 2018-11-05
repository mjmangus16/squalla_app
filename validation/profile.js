const validator = require("validator");
const isEmpty = require("./is-empty");

function validateProfileCourseInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";

  if (validator.isEmpty(data.name)) {
    errors.name = "The course name field must not be empty";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

function validateProfileFriendInput(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";

  if (validator.isEmpty(data.username)) {
    errors.name = "The username field must not be empty";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

module.exports = {
  course: validateProfileCourseInput,
  friend: validateProfileFriendInput
};
