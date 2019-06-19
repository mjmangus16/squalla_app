import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  withStyles
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

import getExperiencePercent from "../../../../utils/getExperiencePercent";

const styles = theme => ({
  card: {
    width: "100%",
    height: "100%"
  },
  progressBar: {
    backgroundColor: grey[400],
    height: 20,
    width: "75%",
    margin: "auto"
  },
  level: {
    fontSize: "1.5em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.15em"
    }
  }
});

class Level extends Component {
  state = {
    completed: getExperiencePercent(this.props.experience, this.props.level)
  };

  render() {
    const { classes, level } = this.props;

    return (
      <Card raised className={classes.card}>
        <CardContent>
          <Typography
            gutterBottom
            variant="display1"
            style={{ textAlign: "center" }}
            classes={{
              display1: classes.level
            }}
          >
            Level: {level}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={this.state.completed}
            className={classes.progressBar}
            color="secondary"
          />
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Level);
