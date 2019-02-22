import React, { Component } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  withStyles
} from "@material-ui/core";

import RoundsChart from "../../../Charts/Performance/Rounds";

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
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader title="Performance" style={{ paddingBottom: 0 }} />
        <CardContent className={classes.chartWrapper}>
          <div className={classes.chart}>
            <RoundsChart height={225} />
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Performance);
