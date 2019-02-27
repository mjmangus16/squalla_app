const doesCourseExist = (courses, name) => {
  let exists = false;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].name === name) {
      exists = true;
      break;
    }
  }
  return exists;
};

module.exports = doesCourseExist;
