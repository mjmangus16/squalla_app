// 400 - 150 = 250
// 250 + var = 350   lvls 1-20 var = 100, 21+ var = 500
// 400 + 350 = 750

function getLevel(userExp, min, max, lvl) {
  if (userExp >= min && userExp < max) {
    return lvl;
  } else {
    let y = max - min;
    min = max;

    let x;
    if (lvl <= 20) {
      x = y + 100;
    } else {
      x = y + 500;
    }

    max = max + x;
    lvl++;
    return getLevel(userExp, min, max, lvl);
  }
}

module.exports = getLevel;
