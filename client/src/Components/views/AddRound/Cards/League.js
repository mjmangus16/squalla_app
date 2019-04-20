import React from "react";
import { Card, CardContent, Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  card: {
    width: "100%",
    height: "100%"
  }
});

const LeagueInput = ({ classes, handler }) => {
  return (
    <Card raised className={classes.card}>
      <CardContent>
        <Typography variant="title" align="center">
          Leagues are not yet available
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(LeagueInput);
