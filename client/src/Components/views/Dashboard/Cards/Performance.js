import React from "react";
import { Card, CardContent, CardHeader, withStyles } from "@material-ui/core";

import RoundsChart from "../../../Charts/Performance/Rounds";

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

const Performance = ({ classes, performance, rating, newToApp }) => {
  return (
    <Card raised className={classes.card}>
      <CardHeader
        title={newToApp ? "Performance (Mock Data)" : "Performance"}
        style={{ paddingBottom: 0 }}
        subheader={
          newToApp
            ? `Current Rating: +4`
            : `Current Rating: ${rating >= 0 ? "+" : null}${rating}`
        }
        classes={{
          title: classes.headerTitle,
          subheader: classes.subheader
        }}
      />
      <CardContent className={classes.chartWrapper}>
        <div className={classes.chart}>
          <RoundsChart height={225} data={performance} newToApp={newToApp} />
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Performance);
