import React from "react";
import { Card, CardContent, withStyles } from "@material-ui/core";
import PointsMonth from "../../../Charts/Achievements/ByMonth";
import PointsRounds from "../../../Charts/Achievements/ByRound";

const styles = theme => ({
  card: {
    width: "100%",
    height: "auto"
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

const PointsChart = ({ classes, chart, data }) => {
  let content;

  if (chart === "month") {
    content = <PointsMonth data={data} />;
  } else if (chart === "rounds") {
    content = <PointsRounds height={275} data={data} />;
  }

  return (
    <Card className={classes.card}>
      <CardContent className={classes.chartWrapper}>
        <div className={classes.chart}>{content}</div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(PointsChart);
