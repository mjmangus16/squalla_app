import React from "react";
import { Card, CardHeader, CardContent, withStyles } from "@material-ui/core";
import Year from "../../../Charts/Rounds/Year";

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

const Stats = ({ classes }) => {
  return (
    <Card className={classes.card}>
      <CardContent className={classes.chartWrapper}>
        <div className={classes.chart}>
          <Year />
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Stats);
