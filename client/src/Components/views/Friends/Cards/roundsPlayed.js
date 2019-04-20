import React from "react";
import { Card, CardContent, withStyles } from "@material-ui/core";
import FriendsChart from "../../../Charts/Friends/Friends2";

const styles = theme => ({
  card: {
    width: "100%",
    height: "100%"
  },
  chartWrapper: {
    overflowX: "auto",
    paddingTop: 0
  },
  chart: {
    position: "relative",
    width: "100%"
  }
});

const Friends = ({ classes, friends, roundsPerFriend }) => {
  return (
    <Card raised className={classes.card}>
      <CardContent className={classes.chartWrapper}>
        <div className={classes.chart}>
          <FriendsChart height={225} data={roundsPerFriend} />
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Friends);
