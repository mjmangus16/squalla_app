import React, { Component } from "react";
import {
  Card,
  Typography,
  withStyles,
  CardHeader,
  CardContent
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    width: "100%",
    height: "auto"
  },
  content: {
    width: "100%",
    margin: "auto"
  },
  cell: {
    width: 100
  },
  friend: {
    color: green[400]
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
    }

    return otherContent;
  }
}

export default withStyles(styles)(Other);
