const tagLeague = (league, round) => {
  let tagScores = [];
  let tagData = [];
  let updatedTagData = [];
  let leagueRoster = league.roster;
  let tags = [];

  for (let i = 0; i < round.scores.length; i++) {
    if (leagueRoster.includes(round.scores[i].username)) {
      tagScores.push({
        username: round.scores[i].username,
        score: round.scores[i].score
      });
    }
  }

  for (let j = 0; j < tagScores.length; j++) {
    for (let y = 0; y < league.rosterData.length; y++) {
      if (tagScores[j].username === league.rosterData[y].username) {
        tagData.push(league.rosterData[y]);
      }
    }
  }

  for (let i = 0; i < tagScores.length; i++) {
    if (tagScores[i].username === tagData[i].username) {
      tagData[i].score = tagScores[i].score;
    }
  }

  tagData.sort((a, b) => {
    if (a.score === b.score) {
      return a.tag - b.tag;
    } else {
      return a.score - b.score;
    }
  });

  for (let i = 0; i < tagData.length; i++) {
    tags.push(tagData[i].tag);
  }

  tags.sort((a, b) => a - b);

  for (let i = 0; i < tagData.length; i++) {
    tagData[i].tag = tags[i];
  }

  for (let i = 0; i < tagData.length; i++) {
    updatedTagData.push({
      username: tagData[i].username,
      tag: tagData[i].tag,
      rounds: tagData[i].rounds + 1
    });
  }

  return updatedTagData;
};

module.exports = tagLeague;
