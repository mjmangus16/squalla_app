import React from "react";
import { Card, CardContent, CardHeader, withStyles } from "@material-ui/core";
import FriendsChart from "../../../Charts/Friends/Friends";

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
    minWidth: 450
  }
});

const Friends = ({ classes }) => {
  return (
    <Card className={classes.card}>
      <CardHeader title="Friends" subheader="7 Friends" />
      <CardContent className={classes.chartWrapper}>
        <div className={classes.chart}>
          <FriendsChart height={250} />
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Friends);
