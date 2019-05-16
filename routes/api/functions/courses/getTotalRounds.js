const getRoundsPerTee = course => {
  let sum = 0;

  course.tees.forEach(tee => {
    course.holes < 18 ? (sum = sum + tee.rounds / 2) : (sum = sum + tee.rounds);
  });
  return sum;
};

module.exports = getRoundsPerTee;
