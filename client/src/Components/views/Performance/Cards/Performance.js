import React, { Component } from "react";
import { Card, CardContent, CardHeader, withStyles } from "@material-ui/core";

import RoundsChart from "../../../Charts/Performance/Rounds";
import CoursesChart from "../../../Charts/Performance/Courses";
import YearChart from "../../../Charts/Performance/Year";

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

class Performance extends Component {
  render() {
    const { classes, chart } = this.props;

    let chartContent;

    if (chart === "rounds") {
      chartContent = <RoundsChart height={300} />;
    } else if (chart === "courses") {
      chartContent = <CoursesChart height={300} />;
    } else if (chart === "year") {
      chartContent = <YearChart height={300} />;
    }

    return (
      <Card className={classes.card}>
        <CardContent className={classes.chartWrapper}>
          <div className={classes.chart}>{chartContent}</div>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Performance);
