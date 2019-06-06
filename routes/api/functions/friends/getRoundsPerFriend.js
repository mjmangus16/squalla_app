const getRoundsPerFriend = (friends, rounds, username) => {
  let myFriends = friends.map(friend => ({
    friend: friend,
    rounds: 0,
    wins: 0
  }));

  myFriends.forEach(friend => {
    rounds.forEach(round => {
      let myScore = round.scores.filter(score => score.username === username)[0]
        .score;
      console.log(myScore);
      round.scores.forEach(score => {
        if (score.username === friend) {
          if (round.holes >= 18) {
            friend.rounds++;
          } else {
            friend.rounds = friend.rounds + 0.5;
          }

          if (score.score < myScore) {
            if (round.holes >= 18) {
              friend.wins++;
            } else {
              friend.wins = friend.wins + 0.5;
            }
          }
        }
      });
    });
  });

  // for (let i = 0; i < myFriends.length; i++) {
  //   for (let y = 0; y < rounds.length; y++) {
  //     let myScore;
  //     for (let j = 0; j < rounds[y].scores.length; j++) {
  //       if (rounds[y].scores[j].username === profile.username) {
  //         myScore = rounds[y].scores[j].score;
  //       }
  //     }
  //     for (let j = 0; j < rounds[y].scores.length; j++) {
  //       if (myFriends[i].friend === rounds[y].scores[j].username) {
  //         myFriends[i].rounds++;
  //         let friendScore = rounds[y].scores[j].score;
  //         if (myScore < friendScore) {
  //           myFriends[i].wins++;
  //         }
  //       }
  //     }
  //   }
  // }

  return myFriends;
};

module.exports = getRoundsPerFriend;
