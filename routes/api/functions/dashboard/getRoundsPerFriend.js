const getRoundsPerFriend = profile => {
  const friends = profile.friends;
  const rounds = profile.rounds;

  let myFriends = friends.map(friend => ({
    friend: friend,
    rounds: 0
  }));

  for (let i = 0; i < myFriends.length; i++) {
    for (let y = 0; y < rounds.length; y++) {
      for (let j = 0; j < rounds[y].scores.length; j++) {
        if (myFriends[i].friend === rounds[y].scores[j].username) {
          if (rounds[y].holes >= 18) {
            myFriends[i].rounds++;
          } else {
            myFriends[i].rounds = myFriends[i].rounds + 0.5;
          }
        }
      }
    }
  }
  return myFriends;
};

module.exports = getRoundsPerFriend;
