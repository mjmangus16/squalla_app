import React, { Component } from "react";
import {
  Card,
  Typography,
  withStyles,
  CardHeader,
  CardContent
} from "@material-ui/core";
import { green, orange, pink } from "@material-ui/core/colors";

const styles = theme => ({
  card: {
    width: "100%",
    height: "100%"
  },
  cell: {
    width: 100
  },
  friend: {
    color: green[300]
  },
  achievement: {
    color: orange[300]
  },
  course: {
    color: pink[300]
  }
});

class Other extends Component {
  render() {
    const { classes, success } = this.props;

    let otherContent;

    if (success.type === "addFriend") {
      otherContent = (
        <Card className={classes.card}>
          <CardHeader title="Friend Added!" />
          <CardContent>
            <Typography variant="subheading">
              <span className={classes.friend}>{success.data}</span> added you
              as a friend! We automatically added{" "}
              <span className={classes.friend}>{success.data}</span> to your
              friends list for you.
            </Typography>
          </CardContent>
        </Card>
      );
    } else if (success.type === "achievementEarned") {
      otherContent = (
        <Card className={classes.card}>
          <CardHeader title="Achievement Earned!" />
          <CardContent>
            <Typography variant="subheading">
              Date:{" "}
              <span className={classes.achievement}>{success.data.date}</span>
            </Typography>
            <Typography variant="subheading">
              Achievement:{" "}
              <span className={classes.achievement}>{success.data.name}</span>
            </Typography>
            <Typography variant="subheading">
              Description:{" "}
              <span className={classes.achievement}>
                {success.data.description}
              </span>
            </Typography>
            <Typography variant="subheading">
              Points:{" "}
              <span className={classes.achievement}>{success.data.points}</span>
            </Typography>
          </CardContent>
        </Card>
      );
    } else if (success.type === "addCourse") {
      otherContent = (
        <Card className={classes.card}>
          <CardHeader title="Course Added!" />
          <CardContent>
            <Typography variant="subheading">
              You played a round at{" "}
              <span className={classes.course}>{success.data}</span> for the
              first time so we automatically added that course to your profile
              for you.
            </Typography>
          </CardContent>
        </Card>
      );
    }

    return otherContent;
  }
}

export default withStyles(styles)(Other);
