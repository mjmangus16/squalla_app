const getRoundsPerTee = tees => {
  let sum = 0;

  for (let i = 0; i < tees.length; i++) {
    sum = sum + tees[i].rounds;
  }
  return sum;
};

module.exports = getRoundsPerTee;
