import React from "react";
import { Card, CardContent, CardHeader, withStyles } from "@material-ui/core";
import FriendsChart from "../../../Charts/Friends/Friends";

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
  },
  headerTitle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.15em"
    }
  },
  subheader: {
    [theme.breakpoints.down("xs")]: {
      fontSize: ".75em"
    }
  }
});

const Friends = ({ classes, friends, roundsPerFriend, newToApp }) => {
  return (
    <Card className={classes.card}>
      <CardHeader
        title={newToApp ? "Friends (Mock Data)" : "Friends"}
        subheader={newToApp ? "3 Friends" : `${friends} Friends`}
        classes={{
          title: classes.headerTitle,
          subheader: classes.subheader
        }}
      />
      <CardContent className={classes.chartWrapper}>
        <div className={classes.chart}>
          <FriendsChart
            height={225}
            data={roundsPerFriend}
            newToApp={newToApp}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Friends);
