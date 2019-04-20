import React from "react";
import { Card, CardContent, withStyles } from "@material-ui/core";
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
    position: "relative",
    width: "100%"
  }
});

const Stats = ({ classes, data }) => {
  return (
    <Card raised className={classes.card}>
      <CardContent className={classes.chartWrapper}>
        <div className={classes.chart}>
          <Year data={data} />
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Stats);
