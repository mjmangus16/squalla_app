const getPerformanceTrendByMonth = profile => {
  const rounds = profile.rounds;
  let year = {
    jan: [0],
    feb: [0],
    mar: [0],
    apr: [0],
    may: [0],
    jun: [0],
    jul: [0],
    aug: [0],
    sep: [0],
    oct: [0],
    nov: [0],
    dec: [0]
  };

  for (let i = 0; i < rounds.length; i++) {
    if (rounds[i].date.charAt(0) === "1") {
      year.jan.push(getPerformance(rounds[i].scores, profile.username));
    } else if (rounds[i].date.charAt(0) === "2") {
      year.feb.push(getPerformance(rounds[i].scores, profile.username));
    } else if (rounds[i].date.charAt(0) === "3") {
      year.mar.push(getPerformance(rounds[i].scores, profile.username));
    } else if (rounds[i].date.charAt(0) === "4") {
      year.apr.push(getPerformance(rounds[i].scores, profile.username));
    } else if (rounds[i].date.charAt(0) === "5") {
      year.may.push(getPerformance(rounds[i].scores, profile.username));
    } else if (rounds[i].date.charAt(0) === "6") {
      year.jun.push(getPerformance(rounds[i].scores, profile.username));
    } else if (rounds[i].date.charAt(0) === "7") {
      year.jul.push(getPerformance(rounds[i].scores, profile.username));
    } else if (rounds[i].date.charAt(0) === "8") {
      year.aug.push(getPerformance(rounds[i].scores, profile.username));
    } else if (rounds[i].date.charAt(0) === "9") {
      year.sep.push(getPerformance(rounds[i].scores, profile.username));
    } else if (rounds[i].date.charAt(0) === "10") {
      year.oct.push(getPerformance(rounds[i].scores, profile.username));
    } else if (rounds[i].date.charAt(0) === "11") {
      year.nov.push(getPerformance(rounds[i].scores, profile.username));
    } else if (rounds[i].date.charAt(0) === "12") {
      year.dec.push(getPerformance(rounds[i].scores, profile.username));
    }
  }

  let trend = [];

  let date = new Date();
  let index = date.getMonth();

  if (index >= 0) {
    trend.push(year.jan.reduce(getSum));
  }
  if (index >= 1) {
    trend.push(year.feb.reduce(getSum) + trend[0]);
  }
  if (index >= 2) {
    trend.push(year.mar.reduce(getSum) + trend[1]);
  }
  if (index >= 3) {
    trend.push(year.apr.reduce(getSum) + trend[2]);
  }
  if (index >= 4) {
    trend.push(year.may.reduce(getSum) + trend[3]);
  }
  if (index >= 5) {
    trend.push(year.jun.reduce(getSum) + trend[4]);
  }
  if (index >= 6) {
    trend.push(year.jul.reduce(getSum) + trend[5]);
  }
  if (index >= 7) {
    trend.push(year.aug.reduce(getSum) + trend[6]);
  }
  if (index >= 8) {
    trend.push(year.sep.reduce(getSum) + trend[7]);
  }
  if (index >= 9) {
    trend.push(year.oct.reduce(getSum) + trend[8]);
  }
  if (index >= 10) {
    trend.push(year.nov.reduce(getSum) + trend[9]);
  }
  if (index >= 11) {
    trend.push(year.dec.reduce(getSum) + trend[10]);
  }

  return trend;
};

const getPerformance = (scores, username) => {
  for (let i = 0; i < scores.length; i++) {
    if (scores[i].username === username) {
      return scores[i].performance;
    }
  }
};

const getSum = (total, num) => {
  return total + num;
};

module.exports = getPerformanceTrendByMonth;
