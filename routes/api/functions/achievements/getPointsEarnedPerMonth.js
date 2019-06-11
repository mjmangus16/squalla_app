const getPointsEarnedPerMonth = (rounds, username) => {
  let year = {};

  let date = new Date();
  let index = date.getMonth();

  for (let y = 0; y <= index; y++) {
    if (y === 0) {
      year.jan = 0;
    } else if (y === 1) {
      year.feb = 0;
    } else if (y === 2) {
      year.mar = 0;
    } else if (y === 3) {
      year.apr = 0;
    } else if (y === 4) {
      year.may = 0;
    } else if (y === 5) {
      year.jun = 0;
    } else if (y === 6) {
      year.jul = 0;
    } else if (y === 7) {
      year.aug = 0;
    } else if (y === 8) {
      year.sep = 0;
    } else if (y === 9) {
      year.oct = 0;
    } else if (y === 10) {
      year.nov = 0;
    } else if (y === 11) {
      year.dec = 0;
    }
  }

  for (let i = 0; i < rounds.length; i++) {
    for (let y = 0; y < rounds[i].scores.length; y++) {
      if (rounds[i].scores[y].username === username) {
        if (rounds[i].date.charAt(0) === "1") {
          year.jan = year.jan + rounds[i].scores[y].achievementPoints;
        } else if (rounds[i].date.charAt(0) === "2") {
          year.feb = year.feb + rounds[i].scores[y].achievementPoints;
        } else if (rounds[i].date.charAt(0) === "3") {
          year.mar = year.mar + rounds[i].scores[y].achievementPoints;
        } else if (rounds[i].date.charAt(0) === "4") {
          year.apr = year.apr + rounds[i].scores[y].achievementPoints;
        } else if (rounds[i].date.charAt(0) === "5") {
          year.may = year.may + rounds[i].scores[y].achievementPoints;
        } else if (rounds[i].date.charAt(0) === "6") {
          year.jun = year.jun + rounds[i].scores[y].achievementPoints;
        } else if (rounds[i].date.charAt(0) === "7") {
          year.jul = year.jul + rounds[i].scores[y].achievementPoints;
        } else if (rounds[i].date.charAt(0) === "8") {
          year.aug = year.aug + rounds[i].scores[y].achievementPoints;
        } else if (rounds[i].date.charAt(0) === "9") {
          year.sep = year.sep + rounds[i].scores[y].achievementPoints;
        } else if (rounds[i].date.charAt(0) === "10") {
          year.oct = year.oct + rounds[i].scores[y].achievementPoints;
        } else if (rounds[i].date.charAt(0) === "11") {
          year.nov = year.nov + rounds[i].scores[y].achievementPoints;
        } else if (rounds[i].date.charAt(0) === "12") {
          year.dec = year.dec + rounds[i].scores[y].achievementPoints;
        }
      }
    }
  }
  return year;
};

module.exports = getPointsEarnedPerMonth;
