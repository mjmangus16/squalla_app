import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card, CardContent, Typography, withStyles } from "@material-ui/core";

import RoundsChart from "../../../Charts/Performance/Rounds";
import CoursesChart from "../../../Charts/Performance/Courses";
import YearChart from "../../../Charts/Performance/Year";
import OverallChart from "../../../Charts/Performance/Overall";

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

class PerformanceCard extends Component {
  render() {
    const { classes, chart } = this.props;
    const { performance } = this.props.profile;

    let chartContent;

    if (!performance) {
      chartContent = null;
    } else {
      if (Object.keys(performance).length > 0) {
        if (chart === "rounds") {
          chartContent = (
            <RoundsChart
              height={300}
              data={performance.performancePointsPerRound}
            />
          );
        } else if (chart === "courses") {
          chartContent = (
            <CoursesChart
              height={300}
              data={performance.performancePointsPerCourse}
            />
          );
        } else if (chart === "year") {
          chartContent = (
            <YearChart
              height={300}
              data={performance.performanceTrendByMonth}
            />
          );
        } else if (chart === "overall") {
          if (
            performance.performanceOverall.plus === 0 &&
            performance.performanceOverall.even === 0 &&
            performance.performanceOverall.minus === 0
          ) {
            chartContent = (
              <CardContent>
                <Typography style={{ textAlign: "center" }} variant="subtitle1">
                  Start adding rounds to see performance data
                </Typography>
              </CardContent>
            );
          } else {
            chartContent = (
              <OverallChart
                height={300}
                data={performance.performanceOverall}
              />
            );
          }
        }
      }
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

PerformanceCard.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps)(withStyles(styles)(PerformanceCard));
