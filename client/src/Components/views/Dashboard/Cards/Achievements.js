import React from "react";
import { Card, CardContent, CardHeader, withStyles } from "@material-ui/core";
import AchievementsChart from "../../../Charts/Achievements/ByRound";

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

const Achievements = ({ classes, points, pointsPerRound, newToApp }) => {
  return (
    <Card raised className={classes.card}>
      <CardHeader
        title={newToApp ? "Achievements (Mock Data)" : "Achievements"}
        subheader={
          newToApp ? `42 Achievement Points` : `${points} Achievement Points`
        }
        classes={{
          title: classes.headerTitle,
          subheader: classes.subheader
        }}
      />
      <CardContent className={classes.chartWrapper}>
        <div className={classes.chart}>
          <AchievementsChart
            height={225}
            data={pointsPerRound}
            newToApp={newToApp}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Achievements);
