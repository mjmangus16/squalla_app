const _ = require("lodash");

const getLeagueData = (league, round) => {
  if (league.type === "Tag") {
    let tagData = tagLeague(league, round);
    let updatedRosterData = _.uniqBy([...tagData, ...league.rosterData], "tag");
    updatedRosterData = updatedRosterData.sort((a, b) => {
      return a.tag - b.tag;
    });
    league.rosterData = updatedRosterData;
  }
  return league;
};

const tagLeague = (league, round) => {
  let playersInLeague = [];
  let sortedPlayers = [];
  let tagsInPlay = [];
  let rosterData = [];
  for (let i = 0; i < round.scores.length; i++) {
    if (league.roster.includes(round.scores[i].player)) {
      playersInLeague.push(round.scores[i]);
    }
  }
  playersInLeague.sort((a, b) => {
    return a.score - b.score;
  });
  for (let i = 0; i < playersInLeague.length; i++) {
    sortedPlayers.push(playersInLeague[i].player);
  }

  for (let i = 0; i < league.rosterData.length; i++) {
    if (sortedPlayers.includes(league.rosterData[i].username)) {
      tagsInPlay.push(league.rosterData[i].tag);
    }
  }

  tagsInPlay.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < sortedPlayers.length; i++) {
    rosterData.push({ username: sortedPlayers[i], tag: tagsInPlay[i] });
  }

  return rosterData;
};

module.exports = getLeagueData;
