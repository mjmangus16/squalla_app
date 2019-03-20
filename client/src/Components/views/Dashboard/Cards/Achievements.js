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
  }
});

const Achievements = ({ classes, points, pointsPerRound }) => {
  return (
    <Card className={classes.card}>
      <CardHeader
        title="Achievements"
        subheader={`${points} Achievement Points`}
      />
      <CardContent className={classes.chartWrapper}>
        <div className={classes.chart}>
          <AchievementsChart height={225} data={pointsPerRound} />
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Achievements);
