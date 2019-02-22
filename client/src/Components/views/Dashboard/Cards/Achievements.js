import React from "react";
import { Card, CardContent, CardHeader, withStyles } from "@material-ui/core";
import AchievementsChart from "../../../Charts/Achievements/ByRound";

const styles = theme => ({
  card: {
    width: "100%",
    height: 325
  },
  chartWrapper: {
    overflowX: "auto",
    paddingTop: 0
  },
  chart: {
    minWidth: 400
  }
});

const Achievements = ({ classes }) => {
  return (
    <Card className={classes.card}>
      <CardHeader title="Achievements" subheader="27 Achievement Points" />
      <CardContent className={classes.chartWrapper}>
        <div className={classes.chart}>
          <AchievementsChart height={225} />
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Achievements);
