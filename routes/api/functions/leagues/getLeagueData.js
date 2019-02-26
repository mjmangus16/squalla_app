const _ = require("lodash");

const tagLeague = require("./league/tagLeague");

const getLeagueData = (league, round) => {
  if (league.type === "Tag") {
    let count = league.rounds;

    let tagData = tagLeague(league, round);
    let updatedRosterData = _.uniqBy([...tagData, ...league.rosterData], "tag");
    updatedRosterData = updatedRosterData.sort((a, b) => {
      return a.tag - b.tag;
    });
    count++;
    league.rounds = count;
    league.rosterData = updatedRosterData;
  }
  return league;
};

module.exports = getLeagueData;
