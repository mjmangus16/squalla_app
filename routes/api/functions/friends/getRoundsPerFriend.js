const getRoundsPerFriend = profile => {
  const friends = profile.friends;
  const rounds = profile.rounds;

  let myFriends = friends.map(friend => ({
    friend: friend,
    rounds: 0,
    wins: 0
  }));

  for (let i = 0; i < myFriends.length; i++) {
    for (let y = 0; y < rounds.length; y++) {
      let myScore;
      for (let j = 0; j < rounds[y].scores.length; j++) {
        if (rounds[y].scores[j].username === profile.username) {
          myScore = rounds[y].scores[j].score;
          console.log(myScore);
        }
      }
      for (let j = 0; j < rounds[y].scores.length; j++) {
        if (myFriends[i].friend === rounds[y].scores[j].username) {
          myFriends[i].rounds++;
          let friendScore = rounds[y].scores[j].score;
          if (myScore < friendScore) {
            myFriends[i].wins++;
          }
        }
      }
    }
  }
  console.log(myFriends);
  return myFriends;
};

module.exports = getRoundsPerFriend;
