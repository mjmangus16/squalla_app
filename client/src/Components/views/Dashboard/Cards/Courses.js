import React from "react";
import { Card, CardContent, CardHeader, withStyles } from "@material-ui/core";
import CoursesChart from "../../../Charts/Courses/Courses";

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

const Courses = ({ classes }) => {
  return (
    <Card className={classes.card}>
      <CardHeader title="Courses" subheader="7 Courses Played" />
      <CardContent className={classes.chartWrapper}>
        <div className={classes.chart}>
          <CoursesChart height={225} />
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Courses);
