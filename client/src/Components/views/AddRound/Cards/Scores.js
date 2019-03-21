import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  Toolbar,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  card: {
    width: "100%",
    height: "100%",
    marginBottom: 10
  },
  container: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
    borderBottom: "solid Grey 1px",
    margin: "auto",
    paddingBottom: 5,
    maxWidth: 250
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 75
  },
  typography: {
    margin: "auto auto 8px 5px",
    fontSize: "1.25em"
  }
});

const ScoresInput = ({ classes, players, scoresHandler, scores }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid
          container
          spacing={16}
          className={classes.gridContainer}
          justify="center"
        >
          {players.map(player => (
            <Grid item xs={12} key={player}>
              <Toolbar>
                <form
                  className={classes.container}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="display1" className={classes.typography}>
                    {player.length > 10
                      ? player.substring(0, 10) + ".."
                      : player}
                  </Typography>
                  <TextField
                    id="standard-score"
                    label="Score"
                    className={classes.textField}
                    value={scores[players.indexOf(player)]}
                    onChange={e =>
                      scoresHandler(e.target.value, players.indexOf(player))
                    }
                    margin="normal"
                  />
                </form>
              </Toolbar>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(ScoresInput);
