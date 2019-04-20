import React from "react";
import { Card, CardContent, Grid, Button, withStyles } from "@material-ui/core";

const styles = theme => ({
  card: {
    width: "100%",
    height: "100%",
    marginBottom: 10
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    margin: "auto"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150
  }
});

const PlayersInput = ({ classes, playersHandler, friends, players, user }) => {
  const isPlayerSelected = player => {
    let exists = false;
    for (let i = 0; i < players.length; i++) {
      if (players[i] === player) {
        exists = true;
        break;
      }
    }

    if (exists) {
      return (
        <Button
          fullWidth
          variant="contained"
          onClick={() => playersHandler(player)}
        >
          {player}
        </Button>
      );
    } else if (!exists) {
      return (
        <Button
          fullWidth
          variant="outlined"
          onClick={() => playersHandler(player)}
        >
          {player}
        </Button>
      );
    }
  };

  return (
    <Card raised className={classes.card}>
      <CardContent>
        <Grid
          container
          spacing={8}
          className={classes.gridContainer}
          justify="center"
        >
          <Grid item xs={12} sm={6} md={4} key={user}>
            {isPlayerSelected(user)}
          </Grid>
          {friends.roundsPerFriend.map(friend => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={friends.roundsPerFriend.indexOf(friend)}
            >
              {isPlayerSelected(friend.friend)}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(PlayersInput);
