const getRoundsPlayedPerMonth = profile => {
  const rounds = profile.rounds;
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
    if (rounds[i].date.charAt(0) === "1" || rounds[i].date.charAt(0) === "01") {
      if (rounds[i].holes < 18) {
        year.jan = year.jan + 0.5;
      } else {
        year.jan++;
      }
    } else if (rounds[i].date.charAt(0) === "2") {
      if (rounds[i].holes < 18) {
        year.feb = year.feb + 0.5;
      } else {
        year.feb++;
      }
    } else if (rounds[i].date.charAt(0) === "3") {
      if (rounds[i].holes < 18) {
        year.mar = year.mar + 0.5;
      } else {
        year.mar++;
      }
    } else if (rounds[i].date.charAt(0) === "4") {
      if (rounds[i].holes < 18) {
        year.apr = year.apr + 0.5;
      } else {
        year.apr++;
      }
    } else if (rounds[i].date.charAt(0) === "5") {
      if (rounds[i].holes < 18) {
        year.may = year.may + 0.5;
      } else {
        year.may++;
      }
    } else if (rounds[i].date.charAt(0) === "6") {
      if (rounds[i].holes < 18) {
        year.jun = year.jun + 0.5;
      } else {
        year.jun++;
      }
    } else if (rounds[i].date.charAt(0) === "7") {
      if (rounds[i].holes < 18) {
        year.jul = year.jul + 0.5;
      } else {
        year.jul++;
      }
    } else if (rounds[i].date.charAt(0) === "8") {
      if (rounds[i].holes < 18) {
        year.aug = year.aug + 0.5;
      } else {
        year.aug++;
      }
    } else if (rounds[i].date.charAt(0) === "9") {
      if (rounds[i].holes < 18) {
        year.sep = year.sep + 0.5;
      } else {
        year.sep++;
      }
    } else if (rounds[i].date.charAt(0) === "10") {
      if (rounds[i].holes < 18) {
        year.oct = year.oct + 0.5;
      } else {
        year.oct++;
      }
    } else if (rounds[i].date.charAt(0) === "11") {
      if (rounds[i].holes < 18) {
        year.nov = year.nov + 0.5;
      } else {
        year.nov++;
      }
    } else if (rounds[i].date.charAt(0) === "12") {
      if (rounds[i].holes < 18) {
        year.dec = year.dec + 0.5;
      } else {
        year.dec++;
      }
    }
  }
  return year;
};

module.exports = getRoundsPlayedPerMonth;
