import React from "react";
import { Card, CardContent, withStyles } from "@material-ui/core";
import PointsBar from "../../../Charts/Achievements/ByMonth";
import PointsLine from "../../../Charts/Achievements/ByRound";

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
    minWidth: 400
  }
});

const PointsChart = ({ classes, chart }) => {
  let content;

  if (chart === "bar") {
    content = <PointsBar />;
  } else if (chart === "line") {
    content = <PointsLine height={275} heading={true} />;
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
