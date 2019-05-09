const getRoundsPerTee = course => {
  let sum = 0;

  for (let i = 0; i < course.tees.length; i++) {
    if (course.holes < 18) {
      sum = sum + course.tees[i].rounds / 2;
    } else {
      sum = sum + course.tees[i].rounds;
    }
  }
  return sum;
};

module.exports = getRoundsPerTee;
