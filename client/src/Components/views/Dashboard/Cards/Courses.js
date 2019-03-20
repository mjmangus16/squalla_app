import React from "react";
import { Card, CardContent, CardHeader, withStyles } from "@material-ui/core";
import CoursesChart from "../../../Charts/Courses/Courses";

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
  },
  headerTitle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.15em"
    }
  },
  subheader: {
    [theme.breakpoints.down("xs")]: {
      fontSize: ".75em"
    }
  }
});

const Courses = ({ classes, coursesPlayed, roundsPerCourse }) => {
  return (
    <Card className={classes.card}>
      <CardHeader
        title="Courses"
        subheader={`${coursesPlayed} Courses Played`}
        classes={{
          title: classes.headerTitle,
          subheader: classes.subheader
        }}
      />
      <CardContent className={classes.chartWrapper}>
        <div className={classes.chart}>
          <CoursesChart height={225} data={roundsPerCourse} />
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Courses);
